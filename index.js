/*
  This JavaScript inventory system simulates a simple store inventory management
  for "Ehqiqi Store". The system keeps track of the store's products, including
  their name, price, and quantity. 

  The inventory system performs the following functions:
  1. Calculates the total number of products available in the store.
  2. Computes the total value of the store's inventory based on product prices and quantities.
  3. Updates the quantity of a specific product (in this case, adds 10 more units of "Laptop").
  4. Identifies and displays the most expensive product in the inventory.

  Finally, the program outputs the store's details, total product count, total inventory value,
  the updated quantity of laptops, and the name of the most expensive product.
*/


// Constant Store Information
const storeName = "Ehqiqi Store";
const storeLocation = "SM";
const storeCapacity = 100;

// Variables
let name;
let price;
let quantity;

// Array ng mga binebenta sa store
let products = [
    {name: "Laptop", price: 18999, quantity: 50},
    {name: "Smartphone", price: 9999, quantity: 100},
    {name: "Tablet", price: 12999, quantity: 80}
];

// Initialize total number of products to zero
let totalNumberProducts = 0;

// nag loloop sa mga products tapos kacalculate yung total number of products
for (let product of products) {
    totalNumberProducts += product.quantity;
}

// nag loloop sa mga products tapos kacalculate yung total value of products
let totalInventoryValue = 0;

for (let product of products) {
    totalInventoryValue += product.price * product.quantity;
}

//Uupdate kung ilan na yung laptop dadagdagan ng 10
const addLaptop = 10;
products[0].quantity += addLaptop;


//Initialize variable para i track yung pinaka mahal na product
let highestPriceProductName = "";
let highestPrice = 0;

//i Loloop lahat ng products para mahanap yung pinaka mahal
for (let product of products) {
    if (product.price > highestPrice) {
        highestPrice = product.price;  // Update highest price
        highestPriceProductName = product.name;  // Update product name
    }
}

// Outputs the result
console.log("Store Name: ", storeName);
console.log("Store Location: ", storeLocation);
console.log("Total Number of Products: ", totalNumberProducts);
console.log("Total Inventory Value: ", totalInventoryValue);
console.log("Updated Laptop Quantity: ", products[0].quantity);
console.log("Most Expensive Product: ", highestPriceProductName);