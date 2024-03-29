const calculateTotalCost = require("../shopping");
const validateShoppingList = require("../shopping");

describe("Shopping Basket", () => {
  it("should calculate the total cost correctly for a single item", () => {
    const shoppingList = ["Apples"];
    const expectedCost = 35;
    expect(calculateTotalCost(shoppingList)).toBe(expectedCost);
  });

  it("should calculate the total cost correctly for multiple items of the same type", () => {
    const shoppingList = ["Bananas", "Bananas", "Bananas"];
    const expectedCost = 20 * 3;
    expect(calculateTotalCost(shoppingList)).toBe(expectedCost);
  });

  it("should calculate the total cost correctly for items with different quantities", () => {
    const shoppingList = [
      "Apples",
      "Apples",
      "Bananas",
      "Bananas",
      "Melons",
      "Melons",
      "Melons",
      "Limes",
      "Limes",
      "Limes",
      "Limes",
    ];
    const expectedCost = 35 * 2 + 20 * 2 + 50 * 2 + 15 * 3;
    expect(calculateTotalCost(shoppingList)).toBe(expectedCost);
  });

  it("should handle an empty shopping list", () => {
    const shoppingList = [];
    const expectedCost = 0;
    expect(calculateTotalCost(shoppingList)).toBe(expectedCost);
  });

  test("should throw error for invalid item", () => {
    const shoppingList = ["Apples", "Bananas", "Melons", "Oranges"];
    expect(() => {
      validateShoppingList(shoppingList);
    }).toThrowError("Invalid item: Orange");
  });

  test("should not throw error for valid items", () => {
    const shoppingList = ["Apples", "Bananas", "Melons", "Limes"];
    expect(() => {
      validateShoppingList(shoppingList);
    }).not.toThrow();
  });
});
