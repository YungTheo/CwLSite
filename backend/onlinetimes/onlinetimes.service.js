const config = require('../config.json');
const jwt = require('jsonwebtoken');
const db = require('_helpers/db');
const Onlinetime = db.Onlinetime;

module.exports = {
    writeTimes
    getAll,
    getById,
    update,
    delete: _delete
};

async function writeTimes(onlineTimeParam) {
    // validate

    const onlineTime = new Onlinetime(onlineTimeParam);

    }

    // save user
    await onlineTime.save();
}

async function getAll() {
    return await Onlinetime.find();
}

async function getById(id) {
    return await Onlinetime.findById(id);
}



async function update(id, onlineTimeParam) {
    const onlineTime = await Onlinetime.findById(id);

    // validate
    if (!onlineTime) throw 'Onlinetime not found';
    if (onlineTime.username !== onlineTimeParam.username && await Onlinetime.findOne({ username: onlineTimeParam.username })) {
        throw 'Username "' + onlineTimeParam.username + '" is already taken';
    }



    // copy userParam properties to user
    Object.assign(onlineTime, onlineTimeParam);

    await onlineTime.save();
}

async function _delete(id) {
    await Onlinetime.findByIdAndRemove(id);
}
