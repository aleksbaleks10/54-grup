class car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  drive() {
    console.log(`The ${this.brand} ${this.model} is driving.`);
  }
}

const car1 = new car("BMW", "X5")
console.log(car1)
car1.drive()





class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`New balance for ${this.owner}: ${this.balance}`);
  }
}

const myAccount = new BankAccount("aleks", 300);
myAccount.deposit(50);




class Book {
  constructor(t, a) {
    this.title = t;
    this.author = a;
  }
  describe() {
    console.log(`The book ${this.title} is written by ${this.author}.`);
  }
}

const myBook = new Book("ჭიანჭველები", "იაკობ გოგებაშჰვილი");
myBook.describe();