const express = require('express');
const router = express.Router();
const onlinetimesService = require('./onlinetimes.service');

// routes
router.post('/writeTimes', writeTimes);
router.get('/getAllOnlinetimes', getAllOnlinetimes);
router.get('/getonlinetimeOnlinetimes', getonlinetimeOnlinetimes);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function writeTimes(req, res, next) {
    onlinetimesService.writeTimes(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    onlinetimesService.getAll()
        .then(onlinetimes => res.json(onlinetimes))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    onlinetimesService.getById(req.onlinetime.sub)
        .then(onlinetime => onlinetime ? res.json(onlinetime) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    onlinetimesService.getById(req.params.id)
        .then(onlinetime => onlinetime ? res.json(onlinetime) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    onlinetimesService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    onlinetimesService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
