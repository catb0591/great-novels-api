const novelsGenres = (connection, Sequelize, genres, novels) => {
  return connection.define('novelsGenres', {
    genresId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: genres, key: 'id' } },
    novelsId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: novels, key: 'id' } },
  }, { paranoid: true })
}

module.exports = novelsGenres

