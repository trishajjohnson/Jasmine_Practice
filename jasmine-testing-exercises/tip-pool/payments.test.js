describe('Payments tests', function(){
    beforeEach(function() {
        
        billAmtInput.value = 100;
        tipAmtInput.value = 20;

    });
    
    it ('should add payment object to allPayments on submitPaymentInfo()', function(){
        
        submitPaymentInfo();
        
        expect(paymentId).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual(100);
        expect(allPayments['payment1'].tipAmt).toEqual(20);
        expect(allPayments['payment1'].tipPercent).toEqual(20);
        expect(Object.keys(allPayments).length).toEqual(1);

    });

    it('should create and return a payment object on createCurPayment()', function() {
        
        const payment = {
            billAmt: 100,
            tipAmt: 20,
            tipPercent: 20   
        };

        expect(createCurPayment()).toEqual(payment);

    });

    it('should append payment row to payment table on appendPaymenTable(curPayment)', function(){
        
        let payment = createCurPayment();
        allPayments['payment1'] = payment;

        appendPaymentTable(payment);
        
        let paymentRows = document.querySelectorAll("#paymentTable tbody tr");

        expect(paymentRows.length).toEqual(1);

    });

    it('should test updateSummary by creating and appending 1 <tr> with 3 <td> to #summaryTable', function(){
        
        submitPaymentInfo();

        expect(summaryTds.length).toEqual(3);
        expect(summaryTds[0].innerText).toEqual("$100");

    });

    afterEach(function() {
        
        billAmtInput.value = '';
        tipAmtInput.value = '';
        
        allPayments = {};
        paymentId = 0;
        paymentTbody.innerHTML = '';
        
        serverTbody.innerHTML = '';
        
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        
    });
});

