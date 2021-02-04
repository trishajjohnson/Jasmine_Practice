window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {

  const values = { amount: 10000, years: 10, rate: 4.5 };

  const amountInput = document.getElementById("loan-amount");
  values.amount = amountInput;
  
  const yearsInput = document.getElementById("loan-years");
  values.years = yearsInput;

  const rateInput = document.getElementById("loan-rate");
  values.rate = rateInput;

  calculateMonthlyPayment(values);


}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100 ) / 12;
  const numPayments = Math.floor(values.years * 12);
  return ((values.amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments))).toFixed(2);
  console.log(((values.amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments))).toFixed(2));
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}
