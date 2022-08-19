const { Schema, model, type } = require("mongoose");
// importing date-fns to format dates
const { format } = require('date-fns')
//Reaction sub document for reactions
const Reaction = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId(),
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: 'Must enter a reaction',
            maxLength: 280
        },
        username: {
            type: String,
            required: 'Must have a username'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtTime) => format(createdAtTime, 'PPpp')
        }
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
    required: 'must have username',
  },
  reactions: [reactionSchema],

});
Thought.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

module.exports = Thought;