class Api::V1::TodosController < ApplicationController
  before_action :set_todo, only: [:destroy, :update, :edit, :show]
  before_action :require_user, except: [:index, :show]
  before_action :require_same_user, only: [:edit, :update, :destroy]
  def new
    @todo = Todo.new
    render json: @todo
  end
  
  def create
    @todo = Todo.new(todo_params)
    if @todo.save{
        render json: {
          todo: @todo,
          flash_msg: "Todo Successfully created",
          status: "200"
        }
    }
    else
      render json: {
        errors: @todos.errors.full_messages,
        status: "500"
      }
    end
  end
  
  def show
    render json: @todo
  end
  
  def edit
    render json: @todo
  end
  
  def update
    if @todo.update(todo_params)
      render json: {
        todo: @todo,
        status: :updated
      }
    else
      render json: {
        errors: @todo.errors.full_messages,
        status: "500"
      }
    end
  end
  
  def index
   @todo = Todo.all
    render json: @todo
  end
  
  def destroy
    @todo.destroy
    render json: @todo
  end
  
  private
  
  def set_todo
    @todo = Todo.find(params[:id])
  end
  
  def todo_params
    params.require(:todo).permit(:title, :description, :user_id)
  end
  
  def require_same_user
    if current_user != @todo.user
      render json: {
        errors: ["You do not have permission to do that!"]
      }
    end
  end
  
end
