const models = require('../models')

const getAllNovelsWithAuthorsAndGenres = async (request, response) => {
  const getAllNovelsWithAuthorsAndGenres = await models.novels.findAll()

  return response.send(getAllNovelsWithAuthorsAndGenres)
}

const getNovelWithAuthorAndGenre = async (request, response) => {
  const { id } = request.params

  const getNovelWithAuthorAndGenre = await models.novels.findOne({
    where: { id }
  })

  return response.send(getNovelWithAuthorAndGenre)
}

module.exports = { getAllNovelsWithAuthorsAndGenres, getNovelWithAuthorAndGenre }
