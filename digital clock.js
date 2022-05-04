const digital_clock = {
	created: function () {
		setInterval(function () {
			this.time = new Date().toLocaleTimeString();
		}.bind(this), 1000)
	},
	data: function () {
		return {
			time: new Date().toLocaleTimeString(),
		}
	},
	template: `
		<strong class="time">{{ time }}</strong>
	`
}