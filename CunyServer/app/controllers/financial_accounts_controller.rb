class FinancialAccountsController < ApiController
    def create

    end
    
    def updateStudentFinance

    end
    
    def valueParams
        params.permit(:student_id, :)
    end
end
