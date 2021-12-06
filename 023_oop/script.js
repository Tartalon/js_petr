"use strict";

const soldier = {
  name: "soldier",
  health: 400,
  armor: 50,
  sayHello: function () {
    console.log(`Hello ${this.name}`);
  },
};

const jonh = {
  name: "Jonh",
  health: 100,
};

// jonh.__proto__ = soldier;
// console.log(jonh);
// console.log(jonh.armor);
// console.log(jonh.sayHello());
// console.log(soldier.sayHello());

Object.setPrototypeOf(jonh, soldier);

const lisa = Object.create(soldier);
jonh.sayHello();
soldier.sayHello();
lisa.sayHello();
