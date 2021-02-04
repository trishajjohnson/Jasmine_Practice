it ('should calculate amount of taxes for high income bracket', function() {
    expect(calculateTaxes(50000)).toEqual(12500);
    expect(calculateTaxes(100000)).toEqual(25000);
})

it ('should calculate amount of taxes for low income bracket', function() {
    expect(calculateTaxes(10000)).toEqual(1500);
    expect(calculateTaxes(1000)).toEqual(150);
    expect(calculateTaxes(0)).toEqual(0);
})