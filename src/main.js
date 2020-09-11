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
    CurrencyExchange.getCurrency(currency);
      .then(function(response) {
        console.log(response);
        
      })
  })
})