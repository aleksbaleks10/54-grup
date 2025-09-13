
const quotes = [
  "რომელმან შექმნა სამყარო ძალითა მით ძლიერითა,",
  "ზეგარდმო არსნი სულითა ყვნა ზეცით მონაბერითა,",
  "ჩვენ, კაცთა, მოგვცა ქვეყანა, გვაქვს უთვალავი ფერითა,",
  "მისგან არს ყოვლი ხელმწიფე სახითა მის მიერითა.",
  "ჰე, ღმერთო ერთო, შენ შეჰქმენ სახე ყოვლისა ტანისა,",
  "შენ დამიფარე, ძლევა მეც დათრგუნვად მე სატანისა,",
  "მომეც მიჯნურთა სურვილი, სიკვდიდმდე გასატანისა,",
  "ცოდვათა შესუბუქება, მუნ თანა წასატანისა."
];

function changeQuote() {
  const quoteElement = document.getElementById("quote");


  const randomIndex = Math.floor(Math.random() * quotes.length);


  quoteElement.textContent = quotes[randomIndex];
}


// 2) 
function getRandomDecimal() {
  return Math.random();
}

// 3) 
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// 4) 
function flipCoin() {
  return Math.random() < 0.5 ? "Heads" : "Tails";
}

// 5)
function generatepassword(length = 12) {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const digits = '0123456789';
  const symbols = '@#$%^&*()';
  const allChars = upper + lower + digits + symbols;

  const password = '';
  for (let i = 0; i < length; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  return password;
}
// 6)
function getRandomBoolean() {
  return Math.random() < 0.5;
}

// 7)
console.log(Math.trunc(12.987)); 

// 8) 
console.log(Math.trunc(-45.67)); 
console.log(Math.floor(-45.67));

// 9) 
let randomNum = Math.random() * 100;
console.log("Original:", randomNum);
console.log("Truncated:", Math.trunc(randomNum));

// 10)
let strNum = "34.89";
console.log(Math.trunc(Number(strNum))); 

// 11) 
let arr = [3.14, 7.9, -2.5, 0.99];
let truncatedArr = arr.map(Math.trunc);
console.log(truncatedArr); 