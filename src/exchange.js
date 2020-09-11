export default class CurrencyExchange {
  static getCurrency(currency) {
    return fetch(`GET https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(function(error) {
      return error;
    })
  }
}