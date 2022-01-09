const Sequelize = require('sequelize')
const authorsModel = require('./authors')
const novelsModel = require('./novels')
const genresModel = require('./genres')
const novelsGenresModel = require('./novelsGenres')

const connection = new Sequelize('greatNovels', 'userNovels', 'password', {
  host: 'localhost', dialect: 'mysql',
})

const authors = authorsModel(connection, Sequelize)
const novels = novelsModel(connection, Sequelize, authors)
const genres = genresModel(connection, Sequelize)
const novelsGenres = novelsGenresModel(connection, Sequelize, genres, novels)


authors.hasMany(novels)
novels.belongsTo(authors)

genres.belongsToMany(novels, { through: novelsGenres })
novels.belongsToMany(genres, { through: novelsGenres })

module.exports = { authors, novels, genres, novelsGenres }
