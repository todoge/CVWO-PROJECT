class TodosController < ApplicationController
  def new
    @todo = Todo.new
  end
  
  def create
    render plain: params[:todo].inspect
#    @todo = Todo.new(todo_params)
#    @todo.save
#    redirect_to "root"
  end
  
  private
  def todo_params
    params.require(:todo).permit(:title, :description)
  end
end
