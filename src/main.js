import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchange from "./exchange.js"

function showMath(amountToExchange, response, toExchange) {
  $('.show-answer').text(`your USD is worth ${amountToExchange * response.conversion_rates[toExchange]} ${toExchange}`)
}

function displayCurrencies(array) {
  let html = ('');
  html += `<p>Here is a list of supported currencies:</p>`
  html += `<ul>`
  for (let i = 0; i < array.length; i++) {
    html += `<li>${array[i]}</li>`
  }
  html += `</ul>`
  $('.currency-list').html(html);
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
          let object = response.conversion_rates;0
          let array = Object.keys(object)
          displayCurrencies(array);
          console.log(Object.keys(object))
        } else {
        showMath(amountToExchange, response, currencyToExchange);
        console.log(response)
        }
      })
  })
});
