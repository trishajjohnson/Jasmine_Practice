
it('should calculate the monthly rate correctly', function () {
  
  values = {
    amount: 10000,
    years: 10,
    rate: 4.5
  };

  expect(calculateMonthlyPayment(values)).toEqual('103.64');
});


it("should return a result with 2 decimal places", function() {
  values = {
    amount: 12000,
    years: 6,
    rate: 6.5
  };

  expect(calculateMonthlyPayment(values)).toEqual('201.72');
});

/// etc
