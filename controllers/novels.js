/* eslint-disable no-console */
const models = require('../models')

const getAllNovelsWithAuthorsAndGenres = async (request, response) => {
  try {
    const getAllNovelsWithAuthorsAndGenres = await models.novels.findAll({
      include: [
        { model: models.authors, attributes: ['id', 'nameFirst', 'nameLast', 'createdAt', 'updatedAt'] },
        { model: models.genres, attributes: ['id', 'name', 'createdAt', 'updatedAt'] }
      ],
      attributes: ['id', 'title', 'authorId', 'createdAt', 'updatedAt']
    })

    return response.send(getAllNovelsWithAuthorsAndGenres)
  } catch (error) {
    console.log(error)
  }
}

const getNovelWithAuthorAndGenre = async (request, response) => {
  try {
    const { identifier } = request.params

    const getNovelWithAuthorAndGenre = await models.novels.findOne({
      where: {
        [models.Op.or]: [
          { id: { [models.Op.like]: `%${identifier}%` } },
          { title: { [models.Op.like]: `%${identifier}%` } }]
      },
      include: [
        { model: models.authors, attributes: ['id', 'nameFirst', 'nameLast', 'createdAt', 'updatedAt'] },
        { model: models.genres, attributes: ['id', 'name', 'createdAt', 'updatedAt'] }
      ],
      attributes: ['id', 'title', 'authorId', 'createdAt', 'updatedAt']
    })

    return response.send(getNovelWithAuthorAndGenre)
  } catch (error) {
    console.log(error)

    return response.status(500).send('Unable to get novel, please try again')
  }
}

module.exports = { getAllNovelsWithAuthorsAndGenres, getNovelWithAuthorAndGenre }
