document.getElementById("calculator-form").addEventListener("submit", function (event) {

  event.preventDefault();

  const initialInvestment = parseFloat(document.getElementById("initial-investment").value);

  const monthlyContribution = parseFloat(document.getElementById("monthly-contribution").value);

  const years = parseFloat(document.getElementById("years").value);

  const interestRate = parseFloat(document.getElementById("interest-rate").value) / 100;

  const interestRateVariance = parseFloat(document.getElementById("interest-rate-variance").value) / 100;

  const compoundFrequency = parseFloat(document.getElementById("compound-frequency").value);

  const lowerRate = interestRate - interestRateVariance;

  const upperRate = interestRate + interestRateVariance;

  let result = calculateCompoundInterest(initialInvestment, monthlyContribution, years, lowerRate, upperRate, compoundFrequency);

  document.getElementById("result").innerHTML = `Future Value: $${result.toFixed(2)}`;

});

function calculateCompoundInterest(initialInvestment, monthlyContribution, years, lowerRate, upperRate, compoundFrequency) {

  let futureValue = initialInvestment;

  const monthlyRate = (upperRate + lowerRate) / 2 / 12;

  for (let i = 0; i < years * 12; i++) {

    futureValue += monthlyContribution;

    futureValue *= (1 + monthlyRate / compoundFrequency);

  }

  return futureValue;

}

