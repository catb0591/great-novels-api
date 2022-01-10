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

const getAuthorByIdWithNovelsAndGenres = async (request, response) => {
  try {
    const { id } = request.params

    const getAuthorByIdWithNovelsAndGenres = await models.authors.findOne({
      where: { id },
      include: [
        {
          model: models.novels,
          attributes: ['id', 'title', 'authorId', 'createdAt', 'updatedAt'],
          include: [{ model: models.genres, attributes: ['id', 'name', 'createdAt', 'updatedAt']}]
        }
      ],
      attributes: ['id', 'nameFirst', 'nameLast', 'createdAt', 'updatedAt']
    })

    return response.send(getAuthorByIdWithNovelsAndGenres)
  } catch (error) {
    console.log(error)

    return response.status(500).send('Unable to get author, please try again')
  }
}

module.exports = { getAllAuthors, getAuthorByIdWithNovelsAndGenres }
