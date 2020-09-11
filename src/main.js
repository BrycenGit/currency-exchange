import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchange from "./exchange.js"

$(document).ready(function() {
  $('#exchange-me').click(function() {
    let currency = $('#currency').val();
    let amountToExchange = $('#dollars').val();
    // clear field function
    CurrencyExchange.getCurrency(currency)
      .then(function(response) {
        if (response == 'TypeError: Failed to fetch') {
          alert('please input propper currency.')
          console.log(response)
        } else if (response['error-type'] == 'base-code-only-on-pro') {
          alert('this version does not support that currency.')
          console.log(response);
        } 
        console.log(response);
      })
      
  })
})

// TypeError: Failed to fetch
// {result: "error", error-type: "base-code-only-on-pro"}