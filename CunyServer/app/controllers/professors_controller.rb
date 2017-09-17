class ProfessorsController < PeopleController
    # POST /professors
    before_action :require_professor, except: [:create]
    
    def create
        super
        @professor = Professor.new()
        @professor.person = @person
        if @professor.save
        # render json: @user, status: :created, location: @user
            render json: {token: @user.auth_token, accountType: :professors}
        else
            render json: @user.errors, status: :unprocessable_entity
        end
    end

    def profile
        puts "Current user"
        puts current_user
        # super
        if is_student? != nil
            puts "headers"
            puts request.headers
            @user = User.find_by_auth_token!(request.headers[:token])
            puts @user
            person = @user.person 
            student = person.student
            render json: {
                user: {
                    username: @user.username, 
                    email: @user.email, 
                    person: person
                }
            }
        else
            render json: "Not a student"
        end
    end





    def courses
        professor_courses = current_user.person.professor.courses
        render json: {
            message: "hit route", 
            courses: professor_courses,
        }
    end
    
end
