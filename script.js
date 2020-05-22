let example = document.getElementById('canvas')
let ctx = example.getContext('2d')
let bigR, smallR, diameter, color
document.getElementById('big-r').oninput = function () {
	if (Number.isInteger(+this.value)) {
		bigR = this.value
	} else {
		this.value = this.value.slice(0, -1)
	}}
document.getElementById('small-r').oninput = function () {
	if (Number.isInteger(+this.value)) {
		smallR = this.value
	} else {
		this.value = this.value.slice(0, -1)
	}}
document.getElementById('diameter').oninput = function () {
	if (Number.isInteger(+this.value)) {
		diameter = this.value
	} else {
		this.value = this.value.slice(0, -1)
	}}
document.getElementById('color').oninput = function () {color = this.value}

let teta = 0, timer

function spiro () {
	ctx.fillStyle = color
	let x = (bigR - smallR) * Math.cos(teta) + diameter * Math.cos((bigR - smallR) * teta / smallR)
	let y = (bigR - smallR) * Math.sin(teta) - diameter * Math.sin((bigR - smallR) * teta / smallR)
	teta += 0.1
	ctx.fillRect(300 + x, 300 + y, 1, 1)
	timer = setTimeout(spiro, 5)
}
function pause () {
	clearInterval(timer)
}
function stop () {
	clearInterval(timer)
	ctx.clearRect(0, 0, 600, 600)
}