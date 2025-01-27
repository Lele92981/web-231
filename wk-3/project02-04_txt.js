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

  const checkboxes = document.querySelectorAll('#menuForm input[type="checkbox"]');

  for (let i = 0; i < checkboxes.length; i++) {

      checkboxes[i].addEventListener('change', calculateTotals);

  }

