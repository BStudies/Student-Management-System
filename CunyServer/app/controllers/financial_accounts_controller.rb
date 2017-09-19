class FinancialAccountsController < UsersController
    def create
        super
        @financial_account = FinancialAccount.new()
        @financial_account.user = @user
        @financial_account.save!  
    end
    
    def updateStudentFinance

    end
    
    # def valueParams
    #     params.permit(:student_id, :)
    # end
    
end
