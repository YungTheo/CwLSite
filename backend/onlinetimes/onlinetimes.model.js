const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: false },
    createdDate: { type: Date, default: Date.now },
    onlineTime: { type : Array , default : []  },


});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model('Onlinetime', schema);
