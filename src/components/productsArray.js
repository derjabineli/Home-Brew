const productsArray = [
  {
    id: "price_1NW7q0CbvYTqUH72yfkDPXYJ",
    name: "Kalita Wave 155",
    price: 34.99,
    img: "./kalita-wave-155.avif",
  },
  {
    id: "price_1NW7qaCbvYTqUH72mKSXmrJ1",
    name: "Kalita Wave 185",
    price: 39.99,
    img: "./kalita-wave-185.avif",
  },
  {
    id: "price_1NW7uDCbvYTqUH72ZJw3wG7O",
    name: "Kalita Server 300ml",
    price: 24.99,
    img: "./kalita-server-300.avif",
  },
  {
    id: "price_1NW7wOCbvYTqUH726upMNHt5",
    name: "Kalita Server 500ml",
    price: 29.99,
    img: "./kalita-server-500.avif",
  },
  {
    id: "price_1NW7z7CbvYTqUH72MA0GTpwd",
    name: "Kalita Filters 155",
    price: 18.99,
    img: "./kalita-filter-155.avif",
  },
  {
    id: "price_1NW80tCbvYTqUH72CrIlw0Cd",
    name: "Kalita Filters 185",
    price: 23.99,
    img: "./kalita-filter-185.avif",
  },
  {
    id: "price_1NW82tCbvYTqUH72BnRGd3Gf",
    name: "Aeropress Filters",
    price: 12.99,
    img: "./aeropress-filters.avif",
  },
  {
    id: "price_1NW84xCbvYTqUH72SzWU2YzZ",
    name: "Cupping Spoon",
    price: 7.99,
    img: "./cupping-spoon.avif",
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }
  return productData;
}

export { productsArray, getProductData };
