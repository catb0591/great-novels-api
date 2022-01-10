const models = require('../models')

const getAllGenres = async (request, response) => {
  const getAllGenres = await models.genres.findAll()

  return response.send(getAllGenres)
}

const getGenreByIdWithNovelsAndAuthors = async (request, response) => {
  const { id } = request.params

  const findId = await models.genres.findOne({
    where: { id }
  })

  return response.send(findId)
}

module.exports = { getAllGenres, getGenreByIdWithNovelsAndAuthors }
