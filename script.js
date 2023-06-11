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

  const dailyRate = (upperRate + lowerRate) / 2 / 365;

  const daysInMonth = 30.44; // Average number of days in a month

  const dailyContribution = monthlyContribution / daysInMonth;

  for (let i = 0; i < years * 365; i++) {

    if (i % daysInMonth === 0) {

      futureValue += dailyContribution;

    }

    futureValue *= (1 + dailyRate / compoundFrequency);

  }

  return futureValue;

}



















