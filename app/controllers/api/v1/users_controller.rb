class Api::V1::UsersController < ApplicationController
  before_action :set_user,only: [:show,:edit,:update]
  before_action :require_user, except: [:show,:create]
  before_action :require_same_user, only: [:edit,:update]
  
  def new
    @user = User.new
    render json: @user
  end
  def create
    @user = User.new(user_params)
    login!
     if @user.save
      render json: {
        user: @user,
        status: :created
      }
     else
        render json: {
           errors: @user.errors.full_messages,
           status: 500
        }
     end
  end
  
  def show
    @user_info = {
      username:@user.username,
      password:@user.password,
      email:@user.email,
      id:@user.id,
      todos:@user.todos,
      created_at:@user.created_at,
      updated_at:@user.updated_at,
    }
    render json: @user_info
  end
  
 def edit
    @user_info = {
      username:@user.username,
      password:@user.password,
      email:@user.email,
      id:@user.id,
      todos:@user.todos,
      created_at:@user.created_at,
      updated_at:@user.updated_at,
    }
    render json: @user_info
  end
  
  def update
    if @user.update(user_params)
        render json: @user
    else
      render json: {
        errors: @user.errors.full_messages,
        status: "401"
      }
    end
  end
  
  private
  
  def set_user
    @user = User.find(params[:id])
  end
  
  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
  
  def require_same_user
    if current_user != @user
      render json: {
        error:"You are not authorized!",
        status: "unauthorized"
      }
    end
  end
end
