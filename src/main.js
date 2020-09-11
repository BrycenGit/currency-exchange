import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchange from "./exchange.js"

function showMath(amountToExchange, response, toExchange) {
  $('.show-answer').text(`your USD is worth ${amountToExchange * response.conversion_rates[toExchange]} ${toExchange}`)
}

$(document).ready(function() {
  $('#exchange-me').click(function() {
    let amountToExchange = $('#dollars').val();
    let currencyToExchange = $('#to-exchange').val().toUpperCase();
    CurrencyExchange.getCurrency()
      .then(function(response) {
        if (response == 'TypeError: Failed to fetch') {
          $('.show-answer').text(response)
        } else if (!response.conversion_rates[currencyToExchange]) {
          $('.show-answer').html(`Error! Please refer to our list of suppported currencies: <a href='https://www.exchangerate-api.com/docs/supported-currencies'>Currencies</a>`)
        } else {
        showMath(amountToExchange, response, currencyToExchange);
        console.log(response)
        }
      })
  })
});
