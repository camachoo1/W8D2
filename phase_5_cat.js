function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

// Cat.prototype.cuteStatement = function () {
//   return `${this.owner} loves ${this.name}`;
// };

Cat.prototype.cuteStatement = function () {
  return `Everyone loves ${this.name}!`;
};

Cat.prototype.meow = function () {
  return `${this.name} meows!`;
};

// class Cat {
//   constructor(name, owner) {
//     this.name = name;
//     this.owner = owner;
//   }
//   // Cat.prototype.cuteStatement = function () {
//   //   return `${this.owner} loves ${this.name}`;
//   // };
//   cuteStatement() {
//     return `Everyone loves ${this.name}!`;
//   }
//   meow() {
//     return `${this.name} meows!`;
//   }
// }
