const { getAll, getOne, remove, update, bulkCreatedGenres } = require('../controllers/genre.controllers');
const express = require('express');

const routerGenre = express.Router();

routerGenre.route('/')
    .get(getAll)
    .post(bulkCreatedGenres);

routerGenre.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerGenre;