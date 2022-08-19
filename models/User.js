const { Schema, model } = require('mongoose');

const User = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'Username is required',
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: 'email is required',
        validate: function(v) {
            return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(v)
        },
        message: props => `${props.value} is not a valid email address!`
    },
    thoughts: {
        type: Array,
        ref: "Thought"
    },
    friends: {
        type: Array,
        ref: "User"
    }

})

User.virtual('friendCount').get(function () {
    return this.friends.length;
});


module.exports = User;
