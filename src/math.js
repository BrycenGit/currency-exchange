export default class DoMath {


  conversion(amountToExchange, response, toExchange) {
    let answer = amountToExchange * response.conversion_rates[toExchange]
    return answer 
  }
}


// function showMath(amountToExchange, response, toExchange) {
//   $('.show-exchange').html(`your USD is worth ${amountToExchange * response.conversion_rates[toExchange]} ${toExchange}`)