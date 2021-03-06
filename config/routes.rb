Rails.application.routes.draw do
  # treat user as an abstract class
  # resources :users, only: [:index, :new, :show]
  # resources :users
  # authentication routes
  # direct routes

  root to: "root#index"


  # getters
  get "/student/profile", to: "students#profile"
  get "/student/profile/courses", to: "students#courses"
  get "/professor/profile", to: "professors#profile"
  get "/admin/profile", to: "admins#profile"
  get "/professor/profile/courses", to: "professors#courses"
  get "/students/finance", to: "students#finances"
  # get "financial", 

  # posts
  post "/login", to: "sessions#create"
  post "/fafsa_account", to: "fafsa_accounts#create"
  post "/tap_account", to: "tap_accounts#create"
  post "/scholarship_account", to: "scholarship_accounts#create"
  post "/loan_account", to: "loan_accounts#create"
  
  
  # deletes
  delete "/logout", to: "sessions#destroy"

  # updates
  put "/students/courses", to: "students#registerCourse"
  put "/students/finance/out_of_pocket", to: "students#update_out_of_pocket"
  put "/students/finance", to: "financial_accounts#updateStudentFinance"

  



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
