class TodosController < ApplicationController
  def index
    
  end
#  def new
#    @todo = Todo.new
#  end
#  
#  def create
#    @todo = Todo.new(todo_params)
#    if @todo.save
#      redirect_to(@todo, :flash => [:success, :info])
#    else
#      render 'new'
#    end
#  end
#  
#  def show
#    @todo = Todo.find(params[:id])
#  end
#  
#  def edit
#    @todo = Todo.find(params[:id])
#  end
#  
#  def update
#    @todo = Todo.find(params[:id])
#    if @todo.update(todo_params)
#      redirect_to(@todo, :flash => [:success, :info])
#    else
#      render 'update'
#    end
#  end
#  
#  def index
#    @todo = Todo.all
#  end
#  
#  private
#  def todo_params
#    params.require(:todo).permit(:title, :description)
#  end
end
