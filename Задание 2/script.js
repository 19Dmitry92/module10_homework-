const btn = document.querySelector('.btn');
const Width = window.screen.width
const Height = window.screen.height
btn.addEventListener('click', () => {     
alert(`Разрешение вашего экрана: ${Width} Х ${Height} пикселей`);
})