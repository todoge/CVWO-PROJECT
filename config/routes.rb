Rails.application.routes.draw do
  root 'homepage#index'
  namespace :api do
    namespace :v1 do
      
      #Todo routes
      get 'todos/index',to:"todos#index"
      post 'todos/create', to:"todos#create"
      get '/show/:id', to:"todos#show"
      get '/edit/:id', to:"todos#edit"
      put '/:id/update', to: "todos#update"
      delete 'todos/:id', to: 'todos#destroy'
      
      #User routes
      get '/users/show/:id', to:"users#show"
      post '/users/create', to:"users#create"
      put '/users/:id/update', to:"users#update"
      get '/users/edit/:id', to:"users#edit"
      
      #session routes
      post '/login', to: 'sessions#create'
      delete '/logout', to: 'sessions#destroy'
      get '/logged_in', to: 'sessions#is_logged_in?'
      
    end
  end
  
  
  
  #Catch all route so that routing is done by React-Router
  match '*path', to: 'homepage#index', via: :all
end
