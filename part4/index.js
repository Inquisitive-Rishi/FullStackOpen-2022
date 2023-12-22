const express = require('express')
const config = require('./utils/config')
const { info, error } = require('./utils/logger')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Blog = require('./models/blog')

const mongoUrl = config.MONGODB_URI;

mongoose.connect(mongoUrl)
  .then(() => {
    info('Connected to MongoDB')
  })
  .catch(err => {
    error('Error connecting', err)
  })

app.use(cors())
app.use(express.json())

app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

const PORT = config.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})