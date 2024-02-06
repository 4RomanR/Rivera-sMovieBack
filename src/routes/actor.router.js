const { getAll, getOne, remove, update, bulkCreatedActors } = require('../controllers/actor.controllers');
const express = require('express');

const routerActor = express.Router();

routerActor.route('/')
    .get(getAll)
    .post(bulkCreatedActors);

routerActor.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerActor;