'use strict';

function User(name, age) {
	this.name = name;
	let userAge = age;

	this.say = function () {
		console.log(`Имя пользователя ${this.name}, возраст ${userAge}`);
	};
}

const vovka = new User('Vovka', 37);
console.log(vovka.name);
console.log(vovka.userAge);
vovka.userAge = 30;
vovka.name = 'Den';
vovka.say();

class User2 {
	constructor(name, age) {
		this.name = name;
		this._age = age;
	}

	#surname = 'Bubko';

	say = () => {
		console.log(
			`Имя пользователя ${this.name} ${this.#surname}, возраст ${this._age}`
		);
	};

	get age() {
		return this._age;
	}

	set age(age) {
		if (typeof age === 'number' && age > 0 && age < 110) {
			this._age = age;
		} else {
			console.log('Не допустимое значение!');
		}
	}

	get surname() {
		return this.#surname;
	}
}

const yulka = new User2('Yulka', 30);
console.log(yulka.age);
yulka.age = 54;
console.log(yulka.age);
yulka.say();
console.log(yulka.surname);
