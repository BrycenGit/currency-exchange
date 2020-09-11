export default class CurrencyExchange {
  static getCurrency(currency) {
    return fetch(`GET https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`)
  }
}