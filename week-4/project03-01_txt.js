/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Leah Thames
      Date:   02/07/2025


      Filename: project03-01.js
*/


// Function to calculate the total cost of the order
// const menuItems = getElementsbyClassName("menuItem");
// let counter=0;

// for (let i = 0; i < menuItems.length; i++)
//   { const menuItem = menuItems[i];



// for (let i = 0; i < menuItems.length; i++)
//   { const checkbox = menuItems[i];



//  menuItems[i].addEventListener('change', () =>
//   { if (checkbox.checked)
//    { checkedCount++;


//  } else { checkedCount--;

//  } checkedCountElement.textContent = checkedCount; });








// Function to calculate the total cost of the order

 // Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed/(2);
 }




 const menuItems = document.getElementsByClassName('menuItem');
    const totalPriceElement = document.getElementById('totalPrice');
    let total = 0;

    function updateTotal() {
      total = 0;

      for (let i = 0; i < menuItems.length; i++) {
        const menuItem = menuItems[i];
        if (menuItem.checked) {
          total += parseFloat(menuItem.value);
        }
      }

      totalPriceElement.textContent = total.toFixed(2);
    }

    for (let i = 0; i < menuItems.length; i++) {
      const menuItem = menuItems[i];
      menuItem.addEventListener('change', updateTotal);
    }