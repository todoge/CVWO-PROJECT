class Api::V1::UsersController < ApplicationController
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
    @user = User.find(params[:id])
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
    @user = User.find(params[:id])
    if @user.update(user_params)
        render json: @user
    else
      print @user.errors.full_messages
#      render json: @user.errors.full_messages
    end
  end
  
  private
  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
  
end
