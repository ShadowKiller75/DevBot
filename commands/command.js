module.exports = class command {

	static parse(message) {
		this.match(message) ? (this.action(message), return true): return false;
	}

	static match(message) {
		return false
	}

	static action(message) {
	}
}
