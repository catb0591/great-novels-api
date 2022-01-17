/* eslint-disable no-console */

const models = require('../models')

const getAllAuthors = async (request, response) => {
  try {
    const getAllAuthors = await models.authors.findAll({
      attributes: ['id', 'nameFirst', 'nameLast', 'createdAt', 'updatedAt']
    })

    return response.send(getAllAuthors)
  } catch (error) {
    console.log(error)
  }
}

const getAuthorByIdentifierWithNovelsAndGenres = async (request, response) => {
  try {
    const { identifier } = request.params

    const getAuthorByIdentifierWithNovelsAndGenres = await models.authors.findOne({
      where: {
        [models.Op.or]: [
          { id: { [models.Op.like]: `%${identifier}%` } },
          { nameLast: { [models.Op.like]: `%${identifier}%` } }]
      },
      include: [
        {
          model: models.novels,
          attributes: ['id', 'title', 'authorId', 'createdAt', 'updatedAt'],
          include: [{ model: models.genres, attributes: ['id', 'name', 'createdAt', 'updatedAt'] }]
        }
      ],
      attributes: ['id', 'nameFirst', 'nameLast', 'createdAt', 'updatedAt']
    })

    return response.send(getAuthorByIdentifierWithNovelsAndGenres)
  } catch (error) {
    console.log(error)

    return response.status(500).send('Unable to get author, please try again')
  }
}

module.exports = { getAllAuthors, getAuthorByIdentifierWithNovelsAndGenres }
