// Function to calculate total cost and tax

function calculateTotals() {

  const checkboxes = document.querySelectorAll('#menuForm input[type="checkbox"]');

   let totalCost = 0;



   // Loop through checkboxes and calculate total cost of checked items

  for (let i = 0; i < checkboxes.length; i++) {

   if (checkboxes[i].checked) {

    totalCost += parseFloat(checkboxes[i].value);

   }

   }


   const tax = totalCost * 0.10; // Calculate 10% tax

   const totalBill = totalCost + tax;



   // Update the HTML elements with calculated values using textContent (more secure)

   document.getElementById('foodTotal').textContent = `$${totalCost.toFixed(2)}`;

   document.getElementById('foodTax').textContent = `$${tax.toFixed(2)}`;

   document.getElementById('totalBill').textContent = `$${totalBill.toFixed(2)}`;

  }



  // Attach event listeners to checkboxes

  const checkboxes1 = document.querySelectorAll('#menuForm input[type="checkbox"]');

  for (let i = 0; i < checkboxes1.length; i++) {

   checkboxes1[i].addEventListener('change', calculateTotals);

  }

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