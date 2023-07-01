function addRateInputs(num) {
  const rateInputs = document.getElementById("rateInputs");
  rateInputs.innerHTML = "";
  for (let i = 0; i < num; i++) {
    rateInputs.innerHTML += `
            <label for="rate${i}">Interest Rate ${i + 1} (%):</label>
            <input type="number" id="rate${i}" value="12">
            <label for="period${i}">Compounding Period ${i + 1}:</label>
            <select id="period${i}">
                <option value="1">Yearly</option>
                <option value="4">Quarterly</option>
                <option value="12">Monthly</option>
                <option value="52">Weekly</option>
                <option value="365">Daily</option>
            </select>
        `;
  }
}

function calculate() {
  const initialInvestment = document.getElementById("initialInvestment").value;
  const years = document.getElementById("years").value;
  const numRates = document.getElementById("numRates").value;
  const results = document.getElementById("results");
  results.innerHTML = "";
  let investments = [];

  for (let i = 0; i < numRates; i++) {
    const rate = document.getElementById(`rate${i}`).value / 100;
    const period = document.getElementById(`period${i}`).value;
    const amount =
      initialInvestment * Math.pow(1 + rate / period, period * years);
    const interestEarned = amount - initialInvestment;
    const returnPercentage =
      ((amount - initialInvestment) / initialInvestment) * 100;
    results.innerHTML += `

            <p><b>For Interest Rate ${i + 1}:</b></p>

            <p>Absolute Return: ₹${amount.toFixed(2)}</p>
            <p>Interest Earned: ₹${interestEarned.toFixed(2)}</p>
            <p>Return Percentage: ${returnPercentage.toFixed(2)}%</p>
        `;

    investments.push({
      rate: i + 1,
      amount: amount,
      returnPercentage: returnPercentage,
    });
  }
  for (let i = 0; i < investments.length; i++) {
    for (let j = i + 1; j < investments.length; j++) {
      results.innerHTML += `
            <p><b>Comparing Interest Rate ${
              investments[i].rate
            } and Interest Rate ${investments[j].rate}:</b></p>
            <p>Difference in Return: ₹${(
              investments[j].amount - investments[i].amount
            ).toFixed(2)}</p>
            <p>Difference in Return Percentage: ${(
              investments[j].returnPercentage - investments[i].returnPercentage
            ).toFixed(2)}%</p>
            `;
    }
  }
}
// Add initial rate input
addRateInputs(2);

calculate();
