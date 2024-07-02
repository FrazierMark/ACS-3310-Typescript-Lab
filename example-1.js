// Run the code here, no problems?
function getPriceWithTax(amount, rate) {
    var price = amount;
    var tax = price * rate;
    return (price + tax).toFixed(2);
}
var answer = getPriceWithTax(23.99, 9.5);
console.log(answer);
// Run the code here and look at the results
// Does it look right?
// What went wrong?
