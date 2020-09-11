import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchange from "./exchange.js"

// function showMath(amountToExchange, response, toExchange) {
//   $('.show-exchange').html(`your USD is worth ${amountToExchange * response.conversion_rates[toExchange]} ${toExchange}`)
//   console.log(response.conversion_rates[toExchange]);
// }



$(document).ready(function() {
  $('#exchange-me').click(function() {
    let amountToExchange = $('#dollars').val();
    let currencyToExchange = $('#to-exchange').val().toUpperCase();

    CurrencyExchange.getCurrency()
      .then(function(response) {
        if (response == 'TypeError: Failed to fetch') {
          $('.show-error').text(response)
          console.log(response)
        } else if (response['error-type'] == 'base-code-only-on-pro') {
          $('.show-error').text('please use')
          console.log(response);
        } 
        // console.log(response);
        // showMath(amountToExchange, response, currencyToExchange);
        let answer = CurrencyExchange.doMath(amountToExchange, response, currencyToExchange);
        $('.show-exchange').html(`your USD is worth ${answer}!`)
      })
      
  })
})

// TypeError: Failed to fetch
// {result: "error", error-type: "base-code-only-on-pro"}