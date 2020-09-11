export default class CurrencyExchange {
  static getCurrency(baseCurrency) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${baseCurrency}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response)
        } else {
          reject(request.response)
        }
      }
      request.open('get', url, true);
      request.send();
    })
  }
}