Rails.application.routes.draw do
  # treat user as an abstract class
  resources :users, only: [:index, :new, :show]
  
  # authentication routes
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/profile", to: "users#profile"

  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
