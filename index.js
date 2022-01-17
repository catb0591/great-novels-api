/* eslint-disable no-console */
const express = require('express')
const { getAllAuthors, getAuthorByIdentifierWithNovelsAndGenres } = require('./controllers/authors')
const { getAllGenres, getGenreByIdWithNovelsAndAuthors } = require('./controllers/genres')
const { getAllNovelsWithAuthorsAndGenres, getNovelWithAuthorAndGenre } = require('./controllers/novels')
const app = express()

app.get('/authors', getAllAuthors)
app.get('/authors/:identifier', getAuthorByIdentifierWithNovelsAndGenres)

app.get('/genres', getAllGenres)
app.get('/genres/:id', getGenreByIdWithNovelsAndAuthors)

app.get('/novels', getAllNovelsWithAuthorsAndGenres)
app.get('/novels/:identifier', getNovelWithAuthorAndGenre)

app.listen(1337, () => {
  console.log('Listening on http://localhost:1337...')
})
