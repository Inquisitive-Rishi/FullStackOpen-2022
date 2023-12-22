const express = require('express')
const config = require('./utils/config')
const { info, error } = require('./utils/logger')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const blogRouter = require('./controllers/blogs')

const mongoUrl = config.MONGODB_URI;

mongoose.set('strictQuery', false)

info('Connecting to', config.MONGODB_URI)

mongoose.connect(mongoUrl)
  .then(() => {
    info('Connected to MongoDB')
  })
  .catch(err => {
    error('Error connecting', err)
  })

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogRouter)

module.exports = app;