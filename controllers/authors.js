/* eslint-disable no-console */

const models = require('../models')

const getAllAuthors = async (request, response) => {
  const getAllAuthors = await models.authors.findAll()

  return response.send(getAllAuthors)
}

const getAuthorByIdWithNovelsAndGenres = async (request, response) => {
  const { id } = request.params

  const getAuthorByIdWithNovelsAndGenres = await models.authors.findOne({
    where: { id }
  })

  return response.send(getAuthorByIdWithNovelsAndGenres)
}

module.exports = { getAllAuthors, getAuthorByIdWithNovelsAndGenres }
