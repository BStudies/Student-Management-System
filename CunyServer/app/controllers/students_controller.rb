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
            payment_type = PaymentType.new()
            payment_type.student = @student
            payment_type.save!

            #each need to be linked with respective accounts
            f=Fafsa.new({value: 0})
            f.payment_type = payment_type
            f.save!

            t=Tap.new({value: 0})
            t.payment_type = payment_type
            t.save!

            l=Loan.new({value: 0})
            l.payment_type = payment_type
            l.save!

            s=Scholarship.new({value: 0})
            s.payment_type = payment_type
            s.save!

            o=OutOfPocket.new({value: 0});
            o.payment_type = payment_type
            o.save!

            payment_type.save!    
            render json: {token: @user.auth_token, accountType: :students}
        else
            render json: @user.errors, status: :unprocessable_entity
        end
    end




    def profile
        puts "in student controller"
        if(is_student?)
            render json: {
                user: {
                    username: current_user.username, 
                    email: current_user.email, 
                    person: current_user.person
                },
                student: true
            }
        else
            render json: {
                message: "You are not a student!",
                student: false,
            }
        end 
    end


    # Put /students/courses
    def registerCourse
        current_user.person.student.courses << Course.find(register_params[:course_id])
        render json:{
            message: "Student was successfuly added"
        }
    end




    def courses
        render json: {
            courses: current_user.person.student.courses,
        }
    end
    
    


    # update finances
    def update_out_of_pocket
        current_user.person.student.payment_types[0].out_of_pocket.update(out_of_pocket_params)
        render json: {
            message: "Success"
        } 
    end

    def update_fafsa 
        current_user.person.student.payment_types[0].fafsa.update(new_total)
    end
    def update_tap 
        current_user.person.student.payment_types[0].tap.update(new_total)
    end
    def update_scholarship 
        current_user.person.student.payment_types[0].scholarship.update(new_total)
    end
    def update_loan 
        current_user.person.student.payment_types[0].loan.update(new_total)
    end
    
     
    #get finances
    def finances
        render json: {
            finances: {
                fafsa: current_user.person.student.payment_types[0].fafsa.value,
                out_of_pocket: current_user.person.student.payment_types[0].out_of_pocket.value,
                tap: current_user.person.student.payment_types[0].tap.value,
                scholarship: current_user.person.student.payment_types[0].scholarship.value,
                loan: current_user.person.student.payment_types[0].loan.value,
            }
        }
    end




    private
    def student_params
    #   params.require(:student).permit(:date_of_birth, :first_name, :last_name, :emergency_contact)
    end

    def register_params
        params.permit(:course_id)
    end

    def out_of_pocket_params
        params.permit(:value)
    end
    
end
