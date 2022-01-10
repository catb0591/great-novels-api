/* eslint-disable no-console */

const models = require('../models')

const getAllGenres = async (request, response) => {
  try {
    const getAllGenres = await models.genres.findAll({
      attributes: ['id', 'name', 'createdAt', 'updatedAt']
    })

    return response.send(getAllGenres)
  } catch (error) {
    console.log(error)
  }
}

const getGenreByIdWithNovelsAndAuthors = async (request, response) => {
  try {
    const { id } = request.params

    const findId = await models.genres.findOne({
      where: { id },
      include: [
        {
          model: models.novels,
          attributes: ['id', 'title', 'authorId', 'createdAt', 'updatedAt'],
          include: [{ model: models.authors, attributes: ['id', 'nameFirst', 'nameLast', 'createdAt', 'updatedAt'] }]
        }
      ],
      attributes: ['id', 'name', 'createdAt', 'updatedAt']
    })

    return response.send(findId)
  } catch (error) {
    console.log(error)

    return response.status(500).send('Unable to get genre, please try again')
  }
}

module.exports = { getAllGenres, getGenreByIdWithNovelsAndAuthors }
