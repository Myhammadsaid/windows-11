const menu__bar = document.querySelector('.menu__bar')
const wifi__menu = document.querySelector('.wifi__menu')
const range__menu = document.querySelector('.range__menu')

document.querySelector('.windows').addEventListener('click', e => {
	menu__bar.classList.toggle('show')
})

document.querySelector('#wifi').addEventListener('click', e => {
	wifi__menu.classList.toggle('show')
})

document.querySelector('.volume i').addEventListener('click', e => {
	range__menu.classList.toggle('show')
})

let range = document.querySelector('#range')
range.addEventListener('mousemove', e => {
	document.querySelector('#num').innerHTML = e.target.value
})

let time = new Date()
let oclock = `${time.getHours()}:${
	time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
} ${time.getHours() <= 12 ? 'AM' : 'PM'}`
document.querySelector('.oclock').innerHTML = oclock

let date = `${time.getDate()}/${time.getMonth()}/${time.getFullYear()}`
document.querySelector('.date').innerHTML = date
