function calcTax(value) {
  if (typeof value === "number") {
    return value * 0.18;
  }
}

module.exports = { calcTax };
