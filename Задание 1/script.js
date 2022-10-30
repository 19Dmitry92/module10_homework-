const btn = document.querySelector('.btn');       //Выбор по классу, запись в константу
const before = document.getElementById("before"); //Выбор по классу, запись в константу
const after = document.getElementById("after");   //Выбор по классу, запись в константу
after.style.display = "none";                     //Скрываем after
btn.addEventListener('click', () => {             //При клике менем местами стили отображения
  if (before.style.display == "none") {
  	before.style.display = "block";
  	after.style.display = "none";
  }
  else {
  	before.style.display = "none";
  	after.style.display = "block";
  }
})