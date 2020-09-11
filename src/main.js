import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchange from "./exchange.js"

function showMath(amountToExchange, response, toExchange) {
  $('.show-exchange').text(`your USD is worth ${amountToExchange * response.conversion_rates[toExchange]} ${toExchange}`)
  console.log(response.conversion_rates[toExchange]);
}



$(document).ready(function() {
  $('#exchange-me').click(function() {
    let amountToExchange = $('#dollars').val();
    let currencyToExchange = $('#to-exchange').val().toUpperCase();

    CurrencyExchange.getCurrency()
      .then(function(response) {
        if (response == 'TypeError: Failed to fetch') {
          $('.show-exchange').text(response)
          console.log(response)
        } else if (!response.conversion_rates[currencyToExchange]) {
          $('.show-exchange').html(`Error! Please refer to our list of suppported currencies: <a href='https://www.exchangerate-api.com/docs/supported-currencies'>Currencies</a>`)
          console.log(response);
        } else {
        showMath(amountToExchange, response, currencyToExchange);

        }
      })
      
  })
})
