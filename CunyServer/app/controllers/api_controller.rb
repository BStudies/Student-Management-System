class ApiController < ApplicationController
    # checks if current requester is logged in
    def require_login
        # authenticate_token ||= render_unauthorized("Access denied")
        authenticate_token || render_unauthorized("Access denied")
    end

    def current_user
        @current_user ||= authenticate_token
    end

    def is_admin?
        Admin.find(current_user.id)
    end

    def is_professor?
        Professor.find(current_user.id)
    end
    
    def is_student?
        Student.find(current_user.id)
    end
    
    
    protected
    # if request is unauthorized, deny
    def render_unauthorized(message)
        errors = {errors: [detail: message]}
        render json: errors, status: :unauthorized
    end

    private
    def authenticate_token
        authenticate_with_http_token do |token, options|
            User.find_by(auth_token: token)
        end
    end
    
    
end
