class PaymentTypesController < ApplicationController
    def create
        payment_type = PaymentType.new()
        payment_type.student = current_user.person.student
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
    end 
    
end
