class ScholarshipAccountsController < ApplicationController
    def create   
        super      
        @scholarship_account = ScholarshipAccount.new()
        @scholarship_account.financial_account = @financial_account
        if @scholarship_account.save!
            render json: {token: @user.auth_token}
        else
            render json: @user.errors, status: :unprocessable_entity
        end
    end
end
