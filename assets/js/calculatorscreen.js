function Screen(scr, miniScr) {
	const screen = document.querySelector(scr)
	const miniScreen = document.querySelector(miniScr)

	function update(data) {
		data.number1 = formatNumber(data.number1)
		data.number2 = formatNumber(data.number2)
		updateScreen(data)
		updateMiniScreen(data)

		if (data.command == 'Del' &&
			!(data.oldData.number1 == '0' &&
				data.oldData.operator == '' &&
				data.oldData.number2 == '')) rippleScreen()
	}

	function updateScreen(data) {
		if (!data.number2)
			screen.innerText = data.number1
		else if (data.number2)
			screen.innerText = data.number2
		
		if (screen.innerText.length > 46) {
			screen.style.fontSize = '20px'
		} else if (screen.innerText.length > 17) {
			screen.style.fontSize = '28px'
		} else {
			screen.style.fontSize = '36px'
		}

		if (data.command != '=') screen.scrollTop = screen.scrollHeight
	}

	function updateMiniScreen(data) {
		if (data.error) {
			miniScreen.innerText = `Error: ${data.error}`
		} else if (data.command == '=') {
			miniScreen.innerText = `${formatNumber(data.oldData.number1)} ${data.oldData.operator} ${formatNumber(data.oldData.number2) || (data.oldData.operator ? '0' : '')}`
		} else {
			if (!data.number2)
				miniScreen.innerText = data.operator || '\xa0'
			else if (data.number2)
				miniScreen.innerText = `${data.number1} ${data.operator}`
		}
	}

	function rippleScreen() {
		$('.screen').ripple({
			fixedPos: [
				window.innerWidth - (window.innerWidth / 4 / 2),
				$('.screen').outerHeight() + $('.cBtn').outerHeight() / 2
			]
		}).trigger('mousedown').ripple({ fixedPos: false })
		window.setTimeout(() => {
			$('.screen').trigger('mouseup')
		}, 300)
	}

	function formatNumber(number) {
		const num = number.split('.')
		num[0] = num[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
		return num.join('.')
	}

	return {
		update
	}
}