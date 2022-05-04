const magic_8ball = {
	data: function () {
		return {
			question: "",
			answer: "",
			possible_answers: [
				"It is certain",
				"It is decidedly so",
				"Without a doubt",
				"Yes definitely",
				"You may rely on it",
				"As I see it, yes",
				"Most likely",
				"Outlook good",
				"Yes",
				"Signs point to yes",
				"Reply hazy, try again",
				"Ask again later",
				"Better not tell you now",
				"Cannot predict now",
				"Concentrate and ask again",
				"Don't count on it",
				"My reply is no",
				"My sources say no",
				"Outlook not so good",
				"Very doubtful"
			],
			shaking: false
		}
	},
	methods: {
		get_answer: function () {
			if (!this.question) {
				return;
			}
			restart_animation(document.getElementById("magic_8ball_front"));
			restart_animation(document.getElementById("magic_8ball_back"));
			restart_animation(document.getElementById("magic_8ball_answer"));
			this.shaking = true;
			this.answer = this.possible_answers[Math.floor(Math.random() * this.possible_answers.length)];

		}
	},
	template: `
		<section class="magic_8ball">
			<form action="javascript:" class="ask_question" v-on:submit="get_answer">
				<input type="text" v-model:value="question" />
				<input type="submit" value="Ask" />
			</form>
			<img id="magic_8ball_back" src="Magic 8-ball (Back).png" v-bind:class="{ shake_magic_8ball_back: shaking }" />
			<img id="magic_8ball_front" src="Magic 8-ball (Front).png" v-bind:class="{ shake_magic_8ball_front: shaking }" />
			<strong id="magic_8ball_answer" v-bind:class="{ shake_magic_8ball_answer: shaking }">{{ answer }}</strong>
		</section>
	`
}

function restart_animation(element) {
	element.style.animation = "none";
	element.offsetHeight;
	element.style.animation = null; 
}