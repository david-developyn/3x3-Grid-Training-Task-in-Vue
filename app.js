new Vue({
	el: "#app",
	components: {
		"digital_clock": digital_clock,
		"login_form": login_form,
		"quiz": quiz,
		"name_age_table": name_age_table,
		"add_table_data": add_table_data,
		"item_price_table": item_price_table,
		"item_search": item_search,
		"item_list_to_grid": item_list_to_grid,
		"magic_8ball": magic_8ball
	},
	methods: {
		add_table_row: function (row_data) {
			this.$refs.name_age_table.row_amount.push(row_data);
		}
	}
});