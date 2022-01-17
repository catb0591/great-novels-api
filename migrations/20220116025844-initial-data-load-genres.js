'use strict'

module.exports = {
  up: async (queryInterface) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.bulkInsert('genres', [

      {
        name: 'Fiction'
      },
      {
        name: 'Horror'
      },
      {
        name: 'Gothic'
      },
      {
        name: 'Fantasy'
      },
      {
        name: 'Historical Fiction'
      },
      {
        name: 'War'
      },
      {
        name: 'Russian Literature'
      },
      {
        name: 'Drama'
      },
      {
        name: 'Plays'
      },
      {
        name: 'Adventure'
      },
      {
        name: 'French Literature'
      },
      {
        name: 'Mystery'
      },
      {
        name: 'Crime'
      },
      {
        name: 'Thriller'
      },
      {
        name: 'Science Fiction'
      },
      {
        name: 'Dystopia'
      },
      {
        name: 'Time Travel'
      },
      {
        name: 'African Literature'
      },
    ])
  },

  down: async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.bulkDelete
  }
}
