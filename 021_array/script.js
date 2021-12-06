const arr = [2, 14, "Vovka", "bober"];

const cloneArr = arr.slice();
cloneArr[2] = 20;
// console.log(arr);
// console.log(cloneArr);

// спред оператор (оператор разворота)

const video = ["youtube", "vimeo", "rotube"],
  blogs = ["wordpress", "livejournal", "blogger"],
  internet = [...video, ...blogs, "koala", "joker"];

// console.log(internet);

const num = [2, 4, 9];
console.log(...num);
