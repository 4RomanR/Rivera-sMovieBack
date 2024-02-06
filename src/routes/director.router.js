const { getAll, getOne, remove, update, bulkCreateDirectors } = require('../controllers/director.controllers');
const express = require('express');

const routerDirector = express.Router();

routerDirector.route('/')
    .get(getAll)
    .post(bulkCreateDirectors);

routerDirector.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerDirector;