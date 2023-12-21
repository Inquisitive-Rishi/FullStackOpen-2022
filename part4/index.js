require('dotenv').config()

const express = require('express')
const { info, error } = require('./utils/logger')
const app = express()
// const app = require('./app')
const cors = require('cors')
const mongoose = require('mongoose')



const mongoUrl = process.env.MONGODB_URI

mongoose.connect(mongoUrl).then(() => info('connected to DB')).catch(err => info('cannot connect', err))

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello')
})

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

const PORT = process.env.PORT
app.listen(PORT, () => {
  info(`Server running on port ${PORT}`)
})