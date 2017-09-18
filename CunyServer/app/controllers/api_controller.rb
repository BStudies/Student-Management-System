class ApiController < ApplicationController
    # checks if current requester is logged in
    def require_login
        # authenticate_token ||= render_unauthorized("Access denied")
        authenticate_token || render_unauthorized("Access denied")
    end

    def require_admin
        is_admin? || render_unauthorized("Access denied")
    end
    def require_student
        is_student? || render_unauthorized("Access denied")
    end
    def require_professor
        is_professor? || render_unauthorized("Access denied")
    end
    

    def current_user
        @current_user ||= authenticate_token
    end

    def is_admin?
        current_user.person.admin != nil
    end

    def is_professor?
        current_user.person.professor != nil
    end
    
    def is_student?
        current_user.person.student != nil
    end
    
    def userType
        if is_student?
            return :students
        elsif is_professor?
            return :professors
        elsif is_admin?
            return :admins
        end
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
