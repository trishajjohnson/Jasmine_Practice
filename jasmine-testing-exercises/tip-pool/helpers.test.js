describe('helper functions calculateTipPercent, sumPaymentTotal and appendTd', function(){
    beforeEach(function () {
        // console.log(paymentTbodyRows);
        // paymentTbodyRows.remove();
        // paymentTbody.innerHTML = "<tr id='payment1'><td>$100</td><td>$20</td><td>20%</td></tr>";
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
        let billAmt = +billAmtInput.value;
        let tipAmt = +tipAmtInput.value;
        console.log(calculateTipPercent(billAmt, tipAmt));
        const tipP = calculateTipPercent(billAmt, tipAmt);
        console.log('tipP', tipP);
        console.log('typeof', typeof tipP);
        expect( typeof tipP ).toBe('number');
        expect(tipP).toEqual('20');
        // billAmtInput.value = 300;
        // tipAmtInput.value = 45;
    });

    // it('should create and append new Td', function(){
        
    //     // const serverTbodyRows = document.querySelectorAll('#serverTbody tr');
    //     console.log(serverRows);
    //     // const serverTbodyRows = document.querySelectorAll('#serverTable tbody tr');
    //     serverRows.remove();
    //     // serverTbodyRows.remove();
    //     const row = document.createElement('tr');
    //     const value = "Test value";
    //     appendTd(row, value);
    //     expect(serverTbodyRows.length).toEqual(1);
    // });

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
