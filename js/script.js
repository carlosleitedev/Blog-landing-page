const btn = document.querySelector('.imagem');

btn.addEventListener('click', () => {
	const element = document.querySelector('.display');
	const img = document.querySelector('.img');

	element.classList.toggle('navbar-mob');
	img.classList.toggle('img-2');
});
