// Function to calculate total cost and tax
function calcTotal() {
  const checkboxes = document.querySelectorAll('#menuForm input[type="checkbox"]');
  let totalCost = 0;
  // Loop through checkboxes and calculate total cost of checked items
  checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
          totalCost += parseFloat(checkbox.value);
      }
  });
  const tax = totalCost * 0.10; // Calculate 10% tax
  const totalBill = totalCost + tax;
  // Update the HTML elements with calculated values using innerHTML
  document.getElementById('foodTotal').innerHTML = `$${totalCost.toFixed(2)}`;
  document.getElementById('foodTax').innerHTML = `$${tax.toFixed(2)}`;
  document.getElementById('totalBill').innerHTML = `$${totalBill.toFixed(2)}`;
}

// Attach event listeners to checkboxes
const checkboxes = document.querySelectorAll('#menuForm input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', calcTotal);
});