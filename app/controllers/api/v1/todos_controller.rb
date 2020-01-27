class Api::V1::TodosController < ApplicationController

  before_action :require_same_user, only: [:edit, :update, :destroy]
  def new
    @todo = Todo.new
    render json: @todo
  end
  
  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todos.errors.full_messages
    end
  end
  
  def show
    @todo = Todo.find(params[:id])
    render json: @todo
  end
  
  def edit
    @todo = Todo.find(params[:id])
    render json: @todo
  end
  
  def update
    @todo = Todo.find(params[:id])
    if @todo.update(todo_params)
      render json: @todo
    else
      render json: @todo.errors.full_messages
    end
  end
  
  def index
   @todo = Todo.all
    render json: @todo
  end
  
  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
    render json: @todo
  end
  
  private
  def todo_params
    params.require(:todo).permit(:title, :description, :user_id)
  end
  
  def require_same_user
    if !authorized_user?
      render json: {
        errors: ["You do not have permission to do that!"]
      }
    end
  end
end
