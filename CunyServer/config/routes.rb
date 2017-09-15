Rails.application.routes.draw do
  # treat user as an abstract class
  # resources :users, only: [:index, :new, :show]
  # resources :users
  # authentication routes
  # direct routes
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/student/profile", to: "students#profile"
  get "/professor/profile", to: "professors#profile"
  get "/admin/profile", to: "admins#profile"


  # professor courses
  get "/professor/profile/courses", to: "professors#courses"

  # resources
  resources :students
  # always leave commented unless need to make a new admin
  resources :admins
  resources :professors
  resources :courses
  # resources :grades
  # resources :payment_types
  # resources :financial_accounts

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
