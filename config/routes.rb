Rails.application.routes.draw do
  root 'homepage#index'
  namespace :api do
    namespace :v1 do
      
      #Todo controller
      get 'todos/index',to:"todos#index"
      post 'todos/create', to:"todos#create"
      get '/show/:id', to:"todos#show"
      put '/:id/update', to: "todos#update"
      delete 'todos/:id', to: 'todos#destroy'
      
      #User controller
      get '/users/show/:id', to:"users#show"
      post '/users/create', to:"users#create"
    end
  end
  
  #Catch all route so that routing is done by React-Router
  match '*path', to: 'homepage#index', via: :all
end
