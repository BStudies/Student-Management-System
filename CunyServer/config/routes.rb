Rails.application.routes.draw do
  # treat user as an abstract class
  # resources :users, only: [:index, :new, :show]
  # resources :users
  # authentication routes
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/student/profile", to: "students#profile"
  get "/professor/profile", to: "professors#profile"
  get "/admin/profile", to: "admins#profile"


  resources :students

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
