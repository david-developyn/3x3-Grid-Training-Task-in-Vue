const add_table_data = {
	data: function () {
		return {
			row_amount: 1
		}
	},
	methods: {
		add_name_age: function () {
			const first_name_element = document.getElementById("first_name");
			const last_name_element = document.getElementById("last_name");
			const age_element = document.getElementById("age");			
			const name_age_data = {
				first_name: first_name_element.value,
				last_name: last_name_element.value,
				age: age_element.value
			}
			first_name_element.value = "";
			last_name_element.value = "";
			age_element.value = "";
			return name_age_data;
		}
	},
	template: `
		<form action="javascript:" class="center_form" v-on:submit="$emit('new_row_data', add_name_age())">
			<div>
				<label for="first_name">First Name:</label>
				<input id="first_name" type="text" />
			</div>
			<div>
				<label for="last_name">Last Name:</label>
				<input id="last_name" type="text" />
			</div>
			<div>
				<label for="age">Age:</label>
				<input id="age" type="number" />
			</div>
			<input type="submit" value="ADD" />
		</form>
	`
}