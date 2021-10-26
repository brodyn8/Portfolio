function Calculator() {
	let observers = []

	function subscribe(f) {
		observers.push(f)
		notifyAll({ ...data })
	}

	function notifyAll(f) {
		observers.forEach(o => o(f))
	}

	const data = {
		number1: '0',
		operator: '',
		number2: '',
		error: null
	}

	function handleCommand(command) {
		const oldData = { ...data }
		data.error = null

		switch (command) {
			case '0': case '1': case '2': case '3': case '4': case '5':
			case '6': case '7': case '8': case '9': case '.':
				handleDigit(command)
				break
			case '+': case '-': case '*': case '/': case '%': case '^':
				handleOperator(command)
				break
			case '=':
				handleEqual()
				break
			case 'Bks':
				handleDelete()
				break
			case 'Del':
				handleDeleteAll()
				break
			case '+-':
				handleNegative()
				break
			default:
				return
		}

		notifyAll({ ...data, command, oldData })
	}

	function handleDigit(d) {
		if (!data.operator) handleNumber(1, d)
		else handleNumber(2, d)
	}

	function handleNumber(n, d) {
		const number = data['number' + n]
		if (d == '.') return handlePeriod(n)

		if (number == '0' || number == '-0') {
			if (d != '0') data['number' + n] =
				number == '-0' ? '-' + d : d
		} else data['number' + n] += d
	}

	function handlePeriod(n) {
		const number = data['number' + n]
		if (number == '' || number == '-') data['number' + n] = data.number1 == '-' ? '-0.' : '0.'
		else if (!number.includes('.')) data['number' + n] += '.'
	}

	function handleOperator(o) {
		data.number1 && (data.number1 = new BigNumber(data.number1).toString())
		data.number2 && (data.number2 = new BigNumber(data.number2).toString())

		if (!data.number2) data.operator = o
		else calculate(), data.operator = o
	}

	function handleDelete() {
		if (!data.number2) data.number1 = data.number1.substr(0, data.number1.length - 1), data.operator = ''
		else data.number2 = data.number2.substr(0, data.number2.length - 1)

		if (data.number1 == '' || data.number1 == '-')
			data.number1 = '0'
	}

	function handleDeleteAll() {
		data.number1 = '0'
		data.operator = ''
		data.number2 = ''
	}

	function handleNegative() {
		if (!data.operator) data.number1 = new BigNumber(data.number1).negate().toString()
		else data.number2 = new BigNumber(data.number2).negate().toString()
	}

	function handleEqual() {
		calculate()
		data.operator = ''
	}

	function calculate() {
		data.number1 == '-0' && (data.number1 = '0')
		data.number2 == '-0' && (data.number2 = '0')
		const result = getResult(data.number1, data.operator, data.number2)
		data.number1 = result
		operator = ''
		data.number2 = ''
	}

	function getResult(n1, o, n2) {
		n1 = new BigNumber(n1)
		n2 = new BigNumber(n2)

		if (!o) return n1.toString()

		let result
		try {
			switch (o) {
				case '+': result = n1.add(n2); break
				case '-': result = n1.subtract(n2); break
				case '*': result = n1.multiply(n2); break
				case '/': result = n1.divide(n2); break
				case '%': result = n1.mod(n2); break
				case '^': result = n1.pow(n2); break
			}
		} catch (err) {
			data.error = err.message
			return '0'
		}

		return result.toString()
	}

	return {
		data,
		subscribe,
		handleCommand
	}
}