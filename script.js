let example = document.getElementById('canvas')
let ctx = example.getContext('2d')
let bigR, smallR, diameter
document.getElementById('big-r').oninput = function () {bigR = this.value}
document.getElementById('small-r').oninput = function () {smallR = this.value}
document.getElementById('diameter').oninput = function () {diameter = this.value}

let teta = 0, timer

function spiro () {
	let x = (bigR - smallR) * Math.cos(teta) + diameter * Math.cos((bigR - smallR) * teta / smallR)
	let y = (bigR - smallR) * Math.sin(teta) - diameter * Math.sin((bigR - smallR) * teta / smallR)
	teta += 0.1
	ctx.fillRect(300 + x, 300 + y, 4, 4)
	timer = setTimeout(spiro, 5)
}