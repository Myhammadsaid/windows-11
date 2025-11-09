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

import { apps } from '../data/apps.js'
let fragment = document.createDocumentFragment()
let main = document.querySelector('.main')
function getApps() {
	apps.map(item => {
		let div = document.createElement('div')
		div.dataset.id = item.id
		div.innerHTML = `
		<img
			style="max-width: 35px"
			src=${item.img}
			alt=${item.title}
		/>
		<h5>${item.title}</h5>
	`
		fragment.appendChild(div)
	})
	main.appendChild(fragment)
}
getApps()

main.addEventListener('click', e => {
	let id = e.target.closest('[data-id]').dataset.id || null
	getOneApp(id)
})

const body = document.querySelector('body')

function getOneApp(id) {
	if (id === '1') {
		menu__bar.classList.toggle('show')
		const div = document.createElement('div')
		div.classList.add('window')
		let id = new Date().getTime()
		div.dataset.id = id
		div.innerHTML = `
		<div class="window__header">
				<div>
					<img style="max-width: 20px" src="./images/edge.png" alt="edge" />
					<h4>Edge</h4>
				</div>
				<div>
					<button data-name='square' data-id=${id}><i class="bxr bx-square"></i></button>
					<button data-name='close' data-id=${id}><i class="bxr bx-x"></i></button>
				</div>
			</div>
			<iframe
				src="https://chromedino.com/joker/"
				frameborder="0"
				scrolling="yes"
				width="100%"
				height="100%"
				loading="lazy"
			></iframe>
		`
		body.appendChild(div)
	}
}

body.addEventListener('click', e => {
	let clickedId = e.target.closest('[data-id]')
	let clickedName = e.target.closest('[data-name]')
	let id = clickedId?.dataset?.id ?? null
	let name = clickedName?.dataset?.name ?? null
	if (id && name) sortApp(id, name)
})

function sortApp(id, name) {
	let listofwindow = document.querySelectorAll('.window')
	listofwindow.forEach(item => {
		if (item.dataset.id === id) {
			if (name === 'square') {
				return item.classList.toggle('fullscreen')
			}
			if (name === 'close') {
				return document.querySelector(`[data-id="${id}"]`)?.remove()
			}
		}
	})
}
