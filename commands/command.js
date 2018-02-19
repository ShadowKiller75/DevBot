module.exports = class command {

	static parse(message) {
		return this.match(message);
	}

	static match(message) {
		return false
	}

	static action(message) {
	}
}
