const item_list_to_grid = {
	data: function () {
		return {
			game_list: [
				new game_item_list_to_grid(
					"Rocket League",
					"https://images.igdb.com/igdb/image/upload/t_cover_big/co4cfe.png"
				),
				new game_item_list_to_grid(
					"Elite: Dangerous",
					"https://images.igdb.com/igdb/image/upload/t_cover_big/co2xs9.png"
				),
				new game_item_list_to_grid(
					"Roblox",
					"https://images.igdb.com/igdb/image/upload/t_cover_big/co2wnq.png"
				),
				new game_item_list_to_grid(
					"Minecraft",
					"https://images.igdb.com/igdb/image/upload/t_cover_big/co49x5.png"
				),
				new game_item_list_to_grid(
					"StarMade",
					"https://images.igdb.com/igdb/image/upload/t_cover_big/co2rf9.png"
				),
				new game_item_list_to_grid(
					"Need for Speed: Most Wanted",
					"https://images.igdb.com/igdb/image/upload/t_cover_big/co20a5.png"
				),
				new game_item_list_to_grid(
					"Sea of Thieves",
					"https://images.igdb.com/igdb/image/upload/t_cover_big/co2558.png"
				),
				new game_item_list_to_grid(
					"Overwatch",
					"https://images.igdb.com/igdb/image/upload/t_cover_big/co1rcb.png"
				),
				new game_item_list_to_grid(
					"Star Trek Online",
					"https://images.igdb.com/igdb/image/upload/t_cover_big/co1o44.png"
				)
			],
			show_name: true
		}
	},
	methods: {
		change_display: function () {
			const game_list_element = document.getElementById("game_list");
			if (game_list_element.classList.contains("list")) {
				game_list_element.className = "grid";
				this.show_name = false;
			} else {
				game_list_element.className = "list";
				this.show_name = true;
			}
		}
	},
	template: `
		<section class="game_section">
			<button class="change_display_button" v-on:click="change_display()">Change Display</button>
			<div id="game_list" class="list">
				<div v-for="index in game_list">
					<img v-bind:src="index.image_source" />
					<strong v-if="show_name">{{ index.name }}</strong>
				</div>
			</div>
		</section>
	`
}

function game_item_list_to_grid(name, image_source) {
	this.name = name;
	this.image_source = image_source;
	this.display = true;
}