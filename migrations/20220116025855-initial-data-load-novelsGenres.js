'use strict'

module.exports = {
  up: async (queryInterface) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    return queryInterface.bulkInsert('novelsGenres', [
      {
        genreId: '1',
        novelId: '1',
      },
      {
        genreId: '2',
        novelId: '1',
      },
      {
        genreId: '4',
        novelId: '1',
      },
      {
        genreId: '1',
        novelId: '2',
      },
      {
        genreId: '2',
        novelId: '2',
      },
      {
        genreId: '3',
        novelId: '2',
      },
      {
        genreId: '4',
        novelId: '2',
      },
      {
        genreId: '1',
        novelId: '3',
      },
      {
        genreId: '5',
        novelId: '3',
      },
      {
        genreId: '1',
        novelId: '4',
      },
      {
        genreId: '5',
        novelId: '4',
      },
      {
        genreId: '6',
        novelId: '4',
      },
      {
        genreId: '7',
        novelId: '4',
      },
      {
        genreId: '1',
        novelId: '5',
      },
      {
        genreId: '5',
        novelId: '5',
      },
      {
        genreId: '1',
        novelId: '6',
      },
      {
        genreId: '5',
        novelId: '6',
      },
      {
        genreId: '8',
        novelId: '6',
      },
      {
        genreId: '9',
        novelId: '6',
      },
      {
        genreId: '1',
        novelId: '7',
      },
      {
        genreId: '5',
        novelId: '7',
      },
      {
        genreId: '10',
        novelId: '7',
      },
      {
        genreId: '11',
        novelId: '7',
      },
      {
        genreId: '1',
        novelId: '8',
      },
      {
        genreId: '12',
        novelId: '8',
      },
      {
        genreId: '13',
        novelId: '8',
      },
      {
        genreId: '14',
        novelId: '8',
      },
      {
        genreId: '1',
        novelId: '9',
      },
      {
        genreId: '12',
        novelId: '9',
      },
      {
        genreId: '15',
        novelId: '9',
      },
      {
        genreId: '2',
        novelId: '9',
      },
      {
        genreId: '1',
        novelId: '10',
      },
      {
        genreId: '7',
        novelId: '10',
      },
      {
        genreId: '12',
        novelId: '10',
      },
      {
        genreId: '1',
        novelId: '11',
      },
      {
        genreId: '12',
        novelId: '11',
      },
      {
        genreId: '1',
        novelId: '12',
      },
      {
        genreId: '15',
        novelId: '12',
      },
      {
        genreId: '16',
        novelId: '12',
      },
      {
        genreId: '1',
        novelId: '13',
      },
      {
        genreId: '15',
        novelId: '13',
      },
      {
        genreId: '16',
        novelId: '13',
      },
      {
        genreId: '1',
        novelId: '14',
      },
      {
        genreId: '15',
        novelId: '14',
      },
      {
        genreId: '17',
        novelId: '14',
      },
      {
        genreId: '1',
        novelId: '15',
      },
      {
        genreId: '5',
        novelId: '15',
      },
      {
        genreId: '18',
        novelId: '15',
      }
    ])
  },

  down: async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.bulkDelete('novelsGenres')
  }
}
