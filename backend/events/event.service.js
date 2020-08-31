const config = require('../config.json');
const jwt = require('jsonwebtoken');
const db = require('_helpers/db');
const Event = db.Event;

module.exports = {
    createEvent,
    update,
    getAll,
    getById,
    delete: _delete
};

async function createEvent(EventParam) {

    if (await Event.findOne({ eventName: EventParam.eventName })) {
    throw 'EventName "' + EventParam.eventName + '" is already taken';
    }



    const event = new Event(EventParam);


    // save Event
    await event.save();
}

async function update(id, EventParam) {
    const event = await Event.findById(id);

    // validate
    if (!Event) throw 'Event not found';
    if (event.eventName !== EventParam.eventName && await Event.findOne({ eventName: EventParam.eventName })) {
        throw 'EventName "' + EventParam.eventName + '" is already taken';
    }


    // copy EventParam properties to Event
    Object.assign(event, EventParam);

    await event.save();
}



async function getAll() {
    return await Event.find();
}

async function getById(id) {
    return await Event.findById(id);
}


async function _delete(id) {
    await Event.findByIdAndRemove(id);
}
