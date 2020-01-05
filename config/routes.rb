Rails.application.routes.draw do
  root "todos#index"
  match '*path' , to:"todos#index", via: :all
end
