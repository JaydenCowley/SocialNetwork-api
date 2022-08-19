const { Schema, model, type } = require("mongoose");
// importing date-fns to format dates
const { format } = require('date-fns')
//Reaction sub document for reactions
const Reaction = new Schema(
    {
        reactionId:
    }
)

// model for thoughts
const Thought = new Schema({
  thoughtText: {
    type: String,
    required: "Must enter thought text",
    length: 1 | 280,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtTime) => format(createdAtTime, 'PPpp')
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],

});
Thought.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

module.exports = Thought;