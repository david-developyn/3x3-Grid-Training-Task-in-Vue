const quiz = {
	data: function () {
		return {
			user_answers: [0, 0, 0, 0],
			completed_quiz_sound: document.createElement("audio")
		}
	},
	methods: {
		check_answers: function () {
			const correct_answers = [1, 2, 3, 4];
			for (let index = 0; index < this.user_answers.length; index++) {
				if (this.user_answers[index] !== correct_answers[index]) {
					return;
				}
			}
			this.completed_quiz_sound.src = "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3";
			this.completed_quiz_sound.play();
		}
	},
	template: `
		<form action="javascript:" v-on:submit="check_answers()">
			<fieldset v-for="index_1 in 4">
				<legend>Question {{ index_1 }} (hint: {{ index_1 }})</legend>
				<div class="quiz_answer" v-for="index_2 in 4">
					<input type="radio" v-bind:id="'question_' + index_1 + '-answer_' + index_2" v-bind:value="index_2" v-bind:name="'question_' + index_1" v-model="user_answers[index_1 - 1]" />
					<label v-bind:for="'question_' + index_1 + '-answer_' + index_2">{{ index_2 }}</label>
				</div>
			</fieldset>	
			<input type="submit" class="horizontal_center" />
		</form>
	`
}