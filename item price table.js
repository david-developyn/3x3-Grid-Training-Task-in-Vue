const item_price_table = {
	data: function () {
		return {
			active_item_list: [
				new item("Item 1"),
				new item("Item 2"),
				new item("Item 3"),
				new item("Item 4"),
				new item("Item 5"),
				new item("Item 6")
			]
		}
	},
	computed: {
		total_price: function () {
			let total = 0;
			this.active_item_list.forEach(item => {
				if (item.active) {
					total += item.price;
				}
			});
			return total;
		}
	},
	template: `
		<table id="name_age_table">
			<thead>
				<tr>
					<th></th>
					<th scope="col">ITEM</th>
					<th scope="col">PRICE</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, index) in active_item_list">
					<td>
						<input type="checkbox" v-model:checked="item['active']" />
					</td>
					<th scope="row">{{ item["name"] }}</th>
					<td>£{{ item["price"] }}</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<th scope="row" colspan="2">TOTAL</th>
					<td>£{{ total_price }}</td>					
				</tr>
			</tfoot>
		</table>
	`
}

function item(name) {
	this.name = name;
	this.price = Math.ceil(Math.random() * 10);
	this.active = false;
}