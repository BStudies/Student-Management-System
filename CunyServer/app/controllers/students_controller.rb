class StudentsController < PeopleController
    # before_action :require_login, except: [:create]
    before_action :require_student, except: [:create, :profile]
    # POST /students
    def create
        super
        @student = Student.new()
        @student.person = @person
        if @student.save
        # render json: @user, status: :created, location: @user
            render json: {token: @user.auth_token, accountType: :students}
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


    # Put /students/courses
    def registerCourse
        # puts register_params
        current_user.person.student.courses << Course.find(register_params)
    end
    


    private
    def student_params
    #   params.require(:student).permit(:date_of_birth, :first_name, :last_name, :emergency_contact)
    end

    def register_params
        params.permit(:course_id)
    end
end
