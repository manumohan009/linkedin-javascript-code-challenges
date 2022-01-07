// function Book(title, author, ISBN, numCopies){
//     this.title = title;
//     this.author = author;
//     this.ISBN = ISBN;
//     this.numCopies = numCopies;
// }

// // We declare this function on the prototype because we don't need to create a new instance of this function each time we make an object
// Book.prototype.getAvailability = function(){
//     if(this.numCopies === 0){
//         return 'Out of stock'
//     }else if(this.numCopies <10){
//         return 'Low stock';
//     }
//     return 'In stock'
// }

// Book.prototype.sell = function(numCopiesSold=1){
//     this.numCopies -=numCopiesSold;
// }

// Book.prototype.restock = function(numCopiesStocked = 5){
//     this.numCopies +=numCopiesStocked;
// }

class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  get availability(){
      return this.getAvailability();
  }

  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1){
    this.numCopies -=numCopiesSold;
  }

  restock(numCopiesRestocked = 5){
      this.numCopies +=numCopiesRestocked;
  }
}

const HungerGames = new Book("Hunger Games", "Suzanne Collins", 2424234, 5);
console.log(HungerGames.getAvailability());
console.log(HungerGames.__proto__); // when using function with prototype to define methods, this exposes the function names. whereas it is empty when using class
HungerGames.restock(12);
console.log(HungerGames.getAvailability());
// console.log(HungerGames.availability());
HungerGames.sell(17);
console.log(HungerGames.getAvailability());
// console.log(HungerGames.availability());
