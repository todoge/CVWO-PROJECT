class Api::V1::TodosController < ApplicationController
 
  def new
    @todo = Todo.new
    render json: @todo
  end
  
  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render 'new'
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
      render 'update'
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
end
