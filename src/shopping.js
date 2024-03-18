const { PRICES } = require("./constants");

function calculateTotalCost(shoppingList) {
  const itemCount = {};

  for (const item of shoppingList) {
    itemCount[item] = (itemCount[item] || 0) + 1;
  }

  let totalCost = 0;

  for (const item in itemCount) {
    const quantity = itemCount[item];
    const price = PRICES[item];
    if (item === "Melons") {
      totalCost += Math.floor(quantity / 2) * price + (quantity % 2) * price;
    } else if (item === "Limes") {
      totalCost +=
        Math.floor(quantity / 3) * 2 * price + (quantity % 3) * price;
    } else {
      totalCost += quantity * price;
    }
  }

  return totalCost;
}

module.exports = calculateTotalCost;
