class LoanAccountsController < FinancialAccountsController
    def create   
        super      
        @loan_account = LoanAccount.new()
        @loan_account.financial_account = @loan_account
        if @loan_account.save!
            render json: {token: @user.auth_token}
        else
            render json: @user.errors, status: :unprocessable_entity
        end
    end
end
