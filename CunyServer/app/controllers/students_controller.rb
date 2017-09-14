class StudentsController < PeopleController
    # POST /students
    def create
        super
        @student = Student.new()
        @student.person_id = @person.id
        if @student.save
        # render json: @user, status: :created, location: @user
        render json: {token: @user.auth_token}
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



    private
    def student_params
      # params.fetch(:user, {})
    #   params.require(:student).permit(:date_of_birth, :first_name, :last_name, :emergency_contact)
    end
end
