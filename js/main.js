const menu = document.querySelector('.menu__bar')
const windows = document.querySelector('.windows')

windows.addEventListener('click', e => {
	menu.classList.toggle('show')
})
