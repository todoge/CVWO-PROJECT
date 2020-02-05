class Api::V1::SessionsController < ApplicationController

def create
    @user = User.find_by(email: session_params[:email])
  
    if @user && @user.authenticate(session_params[:password])
      login!
      render json: {
        logged_in: true,
        user: @user,
      }
    else
      render json: { 
        status: 401,
        errors: ['Invalid Email or Password', 'Verify credentials and try again']
      }
    end
  end
def is_logged_in?
    if logged_in? && current_user
      render json: {
        logged_in: true,
        user: {
          username: current_user.username,
          password: current_user.password,
          email:  current_user.email,
          id: current_user.id,
          todos:  current_user.todos,
          created_at: current_user.created_at,
          updated_at: current_user.updated_at
        }
      }
    else
      render json: {
        logged_in: false,
        message: 'no such user'
      }
    end
  end
  
def destroy
    logout!
    render json: {
      status: 200,
      logged_out: true
    }
end

private
def session_params
    params.require(:user).permit(:username, :email, :password)
end

end
