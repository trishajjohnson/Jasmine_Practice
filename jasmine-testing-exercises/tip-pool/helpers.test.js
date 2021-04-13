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
    });

    // it('should calculate the tip percentage', function(){
        
    //     expect(calculateTipPercent(billAmt,tipAmt)).toEqual(20);
    //     // billAmtInput.value = 300;
    //     // tipAmtInput.value = 45;
    // });

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
        // allPayments = {};
        // serverTbodyRows.remove();
        // serverTbody.innerHTML = '';
        // let row = document.createElement('tr');
        // let td1 = document.createElement('td'); 
        // let td2 = document.createElement('td'); 
        // td1.innerText = 'Alice';
        // td2.innerText = '$20';
        // row.append(td1);
        // row.append(td2);
        // serverTbody.append(row);
        // tipAmtInput.value = '';

    });
});
