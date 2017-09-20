class FinancialAccountsController < UsersController
    before_action :require_login, except: [:create]


    def create
        super
        @financial_account = FinancialAccount.new()
        @financial_account.user = @user
        @financial_account.save!  
    end



    
    # add account type needs to be the same as valueParams field
    def updateStudentFinance 
        field=valueParams[:field]
        if financialType.to_sym == field.to_sym
            student = Student.find(valueParams[:student_id])
            prev = student.payment_types[0].send(field).value
            student.payment_types[0].send(field).update({value: valueParams[:value]})

            render json:{
                message: "Successfully updated student from #{prev} to #{student.payment_types[0].send(field).value}",
                status: 200
            }
        elsif financialType.to_sym != field.to_sym
            render json:{
                message: "You are not a #{field} account so you cannot change it",
                status: 400
            }
        else
            render json:{
                message: "Could not update student finances"
            }
        end
    end


    


    private
    def valueParams
        params.permit(:student_id, :field, :value)
    end
    
end
