const Sequelize = require('sequelize')
const allConfigs = require('../configs/sequelize')

const authorsModel = require('./authors')
const novelsModel = require('./novels')
const genresModel = require('./genres')
const novelsGenresModel = require('./novelsGenres')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})

const authors = authorsModel(connection, Sequelize)
const novels = novelsModel(connection, Sequelize, authors)
const genres = genresModel(connection, Sequelize)
const novelsGenres = novelsGenresModel(connection, Sequelize, genres, novels)


authors.hasMany(novels)
novels.belongsTo(authors)

genres.belongsToMany(novels, { through: novelsGenres })
novels.belongsToMany(genres, { through: novelsGenres })

module.exports = {
  authors, novels, genres, novelsGenres, Op: Sequelize.Op
}
