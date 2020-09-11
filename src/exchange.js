export default class CurrencyExchange {
  static getCurrency(baseCurrency) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${baseCurrency}`)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(function(error) {
      console.log(error);
      return error;
    })
  }

  // converter(baseCurrencyAmount, convertTo) {
  //   baseCurrencyAmount * response.
  // }

}