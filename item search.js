const item_search = {
	data: function () {
		return {
			search_query: "",
			game_list: [
				new game_item_search(
					"Rocket League",
					"https://images.igdb.com/igdb/image/upload/t_cover_big/co4cfe.png"
				),
				new game_item_search(
					"Elite: Dangerous",
					"https://images.igdb.com/igdb/image/upload/t_cover_big/co2xs9.png"
				),
				new game_item_search(
					"Roblox",
					"https://images.igdb.com/igdb/image/upload/t_cover_big/co2wnq.png"
				),
				new game_item_search(
					"Minecraft",
					"https://images.igdb.com/igdb/image/upload/t_cover_big/co49x5.png"
				),
				new game_item_search(
					"StarMade",
					"https://images.igdb.com/igdb/image/upload/t_cover_big/co2rf9.png"
				),
				new game_item_search(
					"Need for Speed: Most Wanted",
					"https://images.igdb.com/igdb/image/upload/t_cover_big/co20a5.png"
				),
				new game_item_search(
					"Sea of Thieves",
					"https://images.igdb.com/igdb/image/upload/t_cover_big/co2558.png"
				),
				new game_item_search(
					"Overwatch",
					"https://images.igdb.com/igdb/image/upload/t_cover_big/co1rcb.png"
				),
				new game_item_search(
					"Star Trek Online",
					"https://images.igdb.com/igdb/image/upload/t_cover_big/co1o44.png"
				)
			]
		}
	},
	watch: {
		search_query(query) {
			this.game_list.forEach(game => {
				if (game.name.toLowerCase().indexOf(query) === -1) {
					game.display = false;
				} else {
					game.display = true;
				}
			});
		}
	},
	template: `
		<section class="game_section">
			<input type="text" placeholder="Search" v-model="search_query" />
			<div class="list">
				<div v-for="index in game_list" v-if="index.display">
					<img v-bind:src="index.image_source" />
					<strong>{{ index.name }}</strong>
				</div>
			</div>
		</section>
	`
}

function game_item_search(name, image_source) {
	this.name = name;
	this.image_source = image_source;
	this.display = true;
}