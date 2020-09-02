const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    players: { type : Array , default : []  },
    createdDate: { type: Date, default: Date.now },
    eventStart: { type: Date, default: Date.now },
    eventEnd: { type: Date, default: Date.now },
    eventType: { type: String, required: false },
    eventDescription: { type: String, required: false },
    eventName: { type: String, required: false }


});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model('Event', schema);
