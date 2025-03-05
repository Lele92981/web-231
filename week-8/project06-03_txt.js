<!DOCTYPE html>
<html>
<head>
   <!--
      JavaScript 7th Edition
      Chapter 6
      Hands-on Project 6-3

      Author:
      Date:

      Filename: project06-03.html
   -->
   <meta charset="utf-8" />
   <meta name="viewport" content="width=device-width,initial-scale=1.0">
   <title>Hands-on Project 6-3</title>
   <link rel="stylesheet" href="styles.css" />
   <script src="project06-03.js"></script>


</head>

<body>
   <header>
      <h1>
         Hands-on Project 6-3
      </h1>
   </header>

   <article>
      <h1>Checkout</h1>
      <form id="billShip" name="billShip" method="get" action="formsubmit.html">
         <section>
            <legend>Shipping Address</legend>
            <fieldset id="shipping">

               <p><span>*</span> &mdash; Required Field</p>
               <label for="firstnameShip">First Name <span>*</span></label>
               <input type="text" required id="firstnameShip" name="firstnameShip" />

               <label for="lastnameShip">Last Name <span>*</span></label>
               <input type="text" required id="lastnameShip" name="lastnameShip"  />

               <label for="address1Ship">Address Line 1 <span>*</span></label>
               <input type="text" required id="address1Ship" name="address1Ship"   />

               <label for="address2Ship">Address Line 2 <span>&nbsp;</span></label>
               <input type="text" id="address2Ship" name="address2Ship"   />

               <label for="cityShip">City <span>*</span></label>
               <input type="text" required id="cityShip" name="cityShip"   />

               <label for="stateShip">State <span>*</span></label>
               <select id="stateShip" name="stateShip">
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
               </select>

               <label for="countryShip">Country <span>*</span></label>
               <input type="text" required id="countryShip" name="countryShip" value="United States" />

               <label for="codeShip">Postal Code <span>*</span></label>
               <input type="text" required id="codeShip" name="codeShip" />
            </fieldset>
         </section>

         <section>
            <legend>Billing Address</legend>
            <fieldset id="billing">

               <input type="checkbox" name="useShip" id="useShip" />
               <label id="cbLabel" for="useShip">Same as Shipping Address</label>

               <label for="firstnameBill">First Name <span>*</span></label>
               <input type="text" required id="firstnameBill" name="firstnameBill"   />

               <label for="lastnameBill">Last Name <span>*</span></label>
               <input type="text" required id="lastnameBill" name="lastnameBill"   />

               <label for="address1Bill">Address Line 1 <span>*</span></label>
               <input type="text" required id="address1Bill" name="address1Bill" />

               <label for="address2Bill">Address Line 2 <span>&nbsp;</span></label>
               <input type="text" id="address2Bill" name="address2Bill"   />

               <label for="cityBill">City <span>*</span></label>
               <input type="text" required id="cityBill" name="cityBill"/>

               <label for="stateBill">State <span>*</span></label>
               <select id="stateBill" name="stateBill">
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
               </select>

               <label for="countryBill">Country <span>*</span></label>
               <input type="text" required id="countryBill" name="countryBill" value="United States"  />

               <label for="codeBill">Postal Code <span>*</span></label>
               <input type="text" required id="codeBill" name="codeBill" />
            </fieldset>
         </section>

         <p id="errorBox"></p>
         <input type="submit" value="Next" />
      </form>
   </article>
</body>
</html>
