const catchError = require('../utils/catchError');
const Movie = require('../models/Movie');
const Genre = require('../models/Genre');
const Actor = require('../models/Actor');
const Director = require('../models/Director');

const getAll = catchError(async(req, res) => {
    const results = await Movie.findAll({include:[Genre, Actor, Director]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Movie.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Movie.findByPk(id, {include:[Genre, Actor, Director]});
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Movie.destroy({ where: {id} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Movie.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});
//Genres
const setGenre = catchError(async (req, res)=>{
    const { id } = req.params;
    const result = await Movie.findByPk(id)
    if(!result) return res.sendStatus(404);
    
    await result.setGenres(req.body)
    const results = await result.getGenres()
    return res.json(results)
})
//Actors
const setActor = catchError(async (req, res)=>{
    const { id } = req.params;
    const result = await Movie.findByPk(id)
    if(!result) return res.sendStatus(404);
    
    await result.setActors(req.body)
    const results = await result.getActors()
    return res.json(results)
})
//Directors
const setDirector = catchError (async(req, res) => {
    const { id } = req.params
    const result = await Movie.findByPk(id)
    if(!result) return res.sendStatus(404)

    await result.setDirectors(req.body)
    const results = await res.getDirectors()
    return res.json(results)

})
module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setGenre,
    setActor,
    setDirector
}