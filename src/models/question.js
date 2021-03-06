const _ = require('lodash');

const Question = function(id, wss) {
	this.id = id;
	this.text = null;
	this.sender = null;
	this.nbVote = 0;
	this.alreadyVoted = false;
	this.up = () => {
		this.alreadyVoted = true;
		wss.emit('up_question', {
			id: this.id
		});
	};
	this.down = () => {
		this.alreadyVoted = true;
		wss.emit('down_question', {
			id: this.id
		});
	}
	return this;
}

module.exports = Question;
