class Api::V1::UsersController < ApplicationController
  def new
    @user = User.new
    render json: @user
  end
  def create
    @user = User.new(user_params)
     if @user.save
      render json: @user
     else
       print @user.errors.full_messages
     end
  end
  
  def show
    @user = User.find(params[:id])
    render json: @user
  end
  
  private
  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
  
end
