function KeyboardListener(document) {
	let observers = []

	function subscribe(f) {
		observers.push(f)
	}

	function notifyAll(f) {
		observers.forEach(o => o(f))
	}

	document.addEventListener('keydown', handleKeyboard)
	document.querySelectorAll('.cBtn').forEach(el =>
		el.addEventListener('click', e => notifyAll(e.target.dataset.action)))
	document.querySelector('[data-action="Bks"]').addEventListener('contextmenu', e =>
		notifyAll('Del'))

	function handleKeyboard(e) {
		if (e.key == 'Dead' && e.code == 'Quote')
			notifyAll('^')
		else if (e.key == '.' || e.key == ',')
			notifyAll('.')
		else if (e.key == ';')
			notifyAll('+-')
		else if (e.key == 'Enter')
			notifyAll('=')
		else if (e.key == 'Backspace')
			notifyAll('Bks')
		else if (e.key == 'Escape')
			notifyAll('Del')
		else
			notifyAll(e.key)
	}

	return {
		subscribe
	}
}