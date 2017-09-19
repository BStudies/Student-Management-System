class FinancialAccountsController < UsersController
    def create
        # super
        # @financial_account = FinancialAccount.new(create_params)
        # @financial_account.user = @user
        # @financial_account.name = create_params.name
        # @financial_account.save!  

    end
    
    def updateStudentFinance

    end
    
    def valueParams
        params.permit(:student_id, :)
    end
    def create_params
        puts params
        params.require(:user).permit(:username, :email, :password)
    end
    
end
