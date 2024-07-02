// Run the code here, no problems?

function getPriceWithTax(amount: number, rate: number) {
	const price = amount;
	const tax = price * rate;
	return (price + tax).toFixed(2);
}

const answer = getPriceWithTax(23.99, 9.5);
console.log(answer);

// Run the code here and look at the results
// Does it look right?
// Before changing the code, yes it was wrong. 

// What went wrong?
// There was a problem with the calculation 
// of the tax and the type. Price was being rounded before the tax was added.
// Also, when using .toFixed(2) it returns a string, not a number.