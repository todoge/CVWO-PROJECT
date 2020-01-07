Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'todos/index'
      get 'todos/create'
      get 'todos/show'
      get 'todos/destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
