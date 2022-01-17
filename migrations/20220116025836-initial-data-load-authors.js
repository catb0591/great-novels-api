'use strict'

module.exports = {
  up: async (queryInterface) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.bulkInsert('authors', [
      {
        nameFirst: 'Bram',
        nameLast: 'Stoker'
      },
      {
        nameFirst: 'Oscar',
        nameLast: 'Wilde'
      },
      {
        nameFirst: 'Alice',
        nameLast: 'Walker'
      },
      {
        nameFirst: 'Leo',
        nameLast: 'Tolstoy'
      },
      {
        nameFirst: 'Charles',
        nameLast: 'Dickens'
      },
      {
        nameFirst: 'Athur',
        nameLast: 'Miller'
      },
      {
        nameFirst: 'Alexander',
        nameLast: 'Dumas'
      },
      {
        nameFirst: 'Arthur',
        nameLast: 'Doyle'
      },
      {
        nameFirst: 'Robert',
        nameLast: 'Stevenson'
      },
      {
        nameFirst: 'Fyodor',
        nameLast: 'Dostoyevsky'
      },
      {
        nameFirst: 'Agatha',
        nameLast: 'Christie'
      },
      {
        nameFirst: 'Ray',
        nameLast: 'Bradbury'
      },
      {
        nameFirst: 'George',
        nameLast: 'Orwell'
      },
      {
        nameFirst: 'H.G.',
        nameLast: 'Wells'
      },
      {
        nameFirst: 'Chinua',
        nameLast: 'Achebe'
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
    return queryInterface.bulkDelete('authors')
  }
}
