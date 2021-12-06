const user = {
  name: "Vovka",
  surname: "Morcovka",
  anthropometry: {
    height: 180,
    weight: 90,
  },
};

const { name, surname } = user;
console.log(surname);

const clonUser = Object.assign({}, user);
clonUser.name = "Yulka";
console.log(user);
console.log(clonUser);
