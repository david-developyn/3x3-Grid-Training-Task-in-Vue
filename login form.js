const login_form = {
	data: function () {
		return {
			username: "",
			password: "",
			success: false
		}
	},
	methods: {
		check_login: function () {
			if ((this.username.toLowerCase() === "username") &&
					(this.password === "password")) {
				this.success = true;
			}
		}
	},
	template: `
		<section class="center_form">
			<form action="javascript:" v-on:submit="check_login()">
				<label for="username">Username (hint: "username"):</label>
				<input id="username" type="text" v-model="username" />
				<label for="password">Password (hint: "password" case-sensitive):</label>
				<input id="password" type="password" v-model="password" />
				<input type="submit" value="Log In" />
			</form>
			<div class="login_successful" v-if="success">Login successful!</div>
		</section>
	`
}