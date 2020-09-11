import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchange from "./exchange.js"

function showMath(baseCurrency,amountToExchange, response, toExchange) {
  $('.show-exchange').html(`your ${baseCurrency} is worth ${amountToExchange * response.conversion_rates[toExchange]}`)
  console.log(response.conversion_rates[toExchange]);
}



$(document).ready(function() {
  $('#exchange-me').click(function() {
    let baseCurrency = $('#currency').val().toUpperCase();
    let amountToExchange = $('#dollars').val();
    let currencyToExchange = $('#to-exchange').val().toUpperCase();
    // clear field function
    CurrencyExchange.getCurrency(baseCurrency)
      .then(function(response) {
        if (response == 'TypeError: Failed to fetch') {
          alert('please input propper currency.')
          console.log(response)
        } else if (response['error-type'] == 'base-code-only-on-pro') {
          alert('this version does not support that currency.')
          console.log(response);
        } 
        console.log(response);
        showMath(baseCurrency, amountToExchange, response, currencyToExchange);
      })
      
  })
})

// TypeError: Failed to fetch
// {result: "error", error-type: "base-code-only-on-pro"}