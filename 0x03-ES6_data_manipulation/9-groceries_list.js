export default function groceriesList() {
  const groceriesList = new Map();
  groceriesList.Apples = 10;
  groceriesList.Tomatoes = 10;
  groceriesList.Pasta = 1;
  groceriesList.Rice = 1;
  groceriesList.Banana = 5;
  return new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);
}
