const names = ["dato", "Giorgi", "Nino", "Luka", "aleks"];

names.forEach(function(name) {
  console.log(`Hello, ${name}!`);
});

const prices = [100, 250, 75, 40]; 

const discountedPrices = prices.map(price => price * 0.9); 

console.log(discountedPrices); 