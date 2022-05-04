const name_age_table = {
	data: function () {
		return {
			row_amount: []
		}
	},
	methods: {
		delete_row: function (row_index) {
			this.row_amount.splice(row_index, 1);
		}
	},
	template: `
		<table id="name_age_table">
			<thead>
				<tr>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Age</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(row, row_index) in row_amount">
					<td>{{ row["first_name"] }}</td>
					<td>{{ row["last_name"] }}</td>
					<td>{{ row["age"] }}</td>
					<td>
						<button v-on:click="delete_row(row_index)">DELETE</button>
					</td>
				</tr>
			</tbody>
		</table>
	`
}