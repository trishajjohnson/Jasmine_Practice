describe('helper functions calculateTipPercent, sumPaymentTotal and appendTd', function(){
    beforeEach(function () {
      
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
        
    });

    it('should calculate sum of all tips from allPayments', function(){
        
        expect(sumPaymentTotal("tipAmt")).toEqual(20);

        billAmtInput.value = 300;
        tipAmtInput.value = 45;
        submitPaymentInfo();

        expect(sumPaymentTotal("tipAmt")).toEqual(65);
        expect(sumPaymentTotal("billAmt")).toEqual(400);
    });

    it('should calculate the tip percentage', function(){

        expect(calculateTipPercent(100, 20)).toEqual(20);
        expect(calculateTipPercent(350, 35)).toEqual(10);

    });

    it('should create and append new Td on appendTd()', function(){
        
        const row = document.createElement('tr');
        const value = "Test value";
        
        appendTd(row, value);

        expect(row.children.length).toEqual(1);
        expect(row.firstChild.innerText).toEqual('Test value');
    });

    it('should append td to tr on appendDeleteBtn(tr)', function() {

        const row = document.createElement('tr');
        appendDeleteBtn(row);
        
        expect(row.children.length).toEqual(1);
        expect(row.firstChild.innerText).toEqual('X');

    })

    afterEach(function(){
        //   tear down code 
        tipAmtInput.value = '';
        billAmtInput.value = '';
        allPayments = {};
        paymentId = 0;
        paymentTbody.innerHTML = '';
        serverTbody.innerHTML = '';
        // summaryTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';

    });
});
