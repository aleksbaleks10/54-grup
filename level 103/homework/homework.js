// 1) 
class Teacher {
  constructor(name, subject) {
    this.name = name; this.subject = subject;
  }
  introduce() {
    console.log(`Hello, I am ${this.name} and I teach ${this.subject}.`);
  }
}

// 2) 
class Phone {
  constructor(brand, model) {
    this.brand = brand; this.model = model;
  }
  ring() {
    console.log(`The ${this.brand} ${this.model} is ringing!`);
  }
}

// 3) 
class Movie {
  constructor(title, year) {
    this.title = title; this.year = year;
  }
  play() {
    console.log(`Now playing: ${this.title} (${this.year})`);
  }
}

// 4) 
class Cat {
  constructor(name, color) {
    this.name = name; this.color = color;
  }
  meow() {
    console.log(`${this.name} the ${this.color} cat says Meow!`);
  }
}

// 5)
class BankCard {
  constructor(cardNumber, balance) {
    this.cardNumber = cardNumber; this.balance = balance;
  }
  withdraw(amount) {
    this.balance -= amount;
    console.log(`New balance: $${this.balance.toFixed(2)}`);
  }
}

// 6)
class Book {
  constructor(title, author) {
    this.title = title; this.author = author;
  }
  read() {
    console.log(`Reading "${this.title}" by ${this.author}...`);
  }
}

// 7)
class Car {
  constructor(make, year) {
    this.make = make; this.year = year;
  }
  drive() {
    console.log(`Driving a ${this.year} ${this.make}!`);
  }
}