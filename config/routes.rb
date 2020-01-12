Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'todos/index'
      post 'todos/create'
      get '/show/:id', to:"todos#show"
      put '/:id/update', to: "todos#update"
      delete 'todos/:id', to: 'todos#destroy'
    end
  end
  
  post '/signup', to:"users#create"
  
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
