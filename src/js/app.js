var additionCalculator = require('./modules/addition-calculator');
var taxCalculator = require('./modules/tax-calculator');

var item1Price = 400;
var item2Price = 600;
var totalPrice = additionCalculator(item1Price, item2Price);
var tax = 1.08;
var priceIncludeTax = taxCalculator(totalPrice, tax);
var $price = $('.price');
$price.html(priceIncludeTax);
velocity($price, 'fadeIn');