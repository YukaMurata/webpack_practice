module.exports = function taxCalculator(price, tax) {
  return Math.round(price * tax);
}