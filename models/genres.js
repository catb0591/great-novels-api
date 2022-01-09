const genres = (connection, Sequelize) => {
  return connection.define('genres', {
    id: { type: Sequelize.Integer, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
  }, { paranoid: true })
}

module.exports = genres
