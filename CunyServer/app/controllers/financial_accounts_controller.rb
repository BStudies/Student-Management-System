class FinancialAccountsController < UsersController
    before_action :require_login, except: [:create]
    def create
        super
        @financial_account = FinancialAccount.new()
        @financial_account.user = @user
        @financial_account.save!  
    end
    
    def updateStudentFinance 
        puts valueParams
        puts "This is where we change the students reccords"
        student = Student.find(valueParams[:student_id])
        puts "Current Value: #{student.payment_types[0].fafsa.value}"
        student.payment_types[0].fafsa.update({value: valueParams[:value]})
        puts "New Value: #{student.payment_types[0].fafsa.value}"
        render json:{
            message: "Successfully updated student",
            status: 200
        }
    end


    private
    def valueParams
        params.permit(:student_id, :field, :value)
    end
    
end
