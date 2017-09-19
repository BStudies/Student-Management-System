class FafsaAccountsController < FinancialAccountsController
    def create   
        super      
        @fafsa_account = FafsaAccount.new()
        @fafsa_account.financial_account = @financial_account
        if @fafsa_account.save!
            render json: {token: @user.auth_token}
        else
            render json: @user.errors, status: :unprocessable_entity
        end
    end

end
