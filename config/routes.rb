Rails.application.routes.draw do
  root "todos#index"
  get "Todo", to:"todos#Todo"
  get '/*path' => 'todos#index'
end
