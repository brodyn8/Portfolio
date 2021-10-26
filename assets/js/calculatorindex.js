document.querySelectorAll('.cBtn').forEach(e => e.onclick = function () { this.blur() })
document.oncontextmenu = () => false
document.querySelector('.screen').onclick = copyScreenText

const calc = Calculator()
const calcScreen = Screen('#screen', '#miniScreen')
const calcKeyboard = KeyboardListener(document)

calc.subscribe(calcScreen.update)
calcKeyboard.subscribe(calc.handleCommand)

function copyScreenText() {
	const el = document.createElement('textarea')
	el.value = calc.data.number2 ? calc.data.number2 : calc.data.number1
	document.body.appendChild(el)
	el.select()
	document.execCommand('copy')
	document.body.removeChild(el)
}

$('.cBtn').ripple({ maxDiameter: '100%', adaptPos: true })
$('.screen').ripple({
	maxDiameter: '200%'
})