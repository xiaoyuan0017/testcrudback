const mongoose = require('mongoose')
mongoose.connect('', { useNewUrlParser: true, useUnifiedTopology: true })


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
let Schema = mongoose.Schema;

// user
let userSchema = new Schema({
    name: {
        type: String, require: true, bcrype: true
    },
    age: {
        type: Number, require: true, bcrype: true
    },
    country: {
        type: String,
    },
    date: Date
})


let users = mongoose.model('testusers', userSchema);


// admins, users, shops, blogs
module.exports = { users };
