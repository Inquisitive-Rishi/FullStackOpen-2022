const config = require('./utils/config')
const { info, error } = require('./utils/logger')
const app = require('./app')


const PORT = config.PORT
app.listen(PORT, () => {
  info(`Server running on port ${PORT}`)
})