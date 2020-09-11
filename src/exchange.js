export default class CurrencyExchange {
  static getCurrency() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
    .then(function(response) {
      if (!response.ok) {
        console.log(response)
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(function(error) {
      console.log(error);
      return error;
    })
  }

  doMath(amountToExchange, response, toExchange) {
    amountToExchange * response.conversion_rates[toExchange]
    return;
  }


}