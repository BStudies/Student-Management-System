class SessionsController < ApiController
    skip_before_action :require_login, only: [:create], raise: false

    def create
        puts "creating a session"
        if user = User.validate_login(params[:username], params[:password])
            allow_token_to_be_used_only_once_for(user)
            send_token_for_valid_login_of(user)
        else
            # render_unauthorized("Error with your login or password")
            render json:{
                incorrect: true,
            }
        end
        
    end

    def destroy
        logout
        head :ok
    end

    private
    def send_token_for_valid_login_of(user)
        if user.person.student
            render json: {
                token: user.auth_token,
                accountType: :students
            }
        elsif user.person.professor
            render json: {
                token: user.auth_token,
                accountType: :professors
            }
        end
    end
    
    def allow_token_to_be_used_only_once_for(user)
        user.regenerate_auth_token
    end
    
    def logout
        current_user.invalidate_token
    end
end
