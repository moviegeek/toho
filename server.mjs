//toho api server
import express from 'express'
import * as api from './api'

const app = express()

app.get('/playing', async (_, res, next) => {
  try {
    const movies = await api.playing()
    res.json(movies)
  } catch (e) {
    next(e)
  }
})

app.get('/coming', async (_, res, next) => {
  try {
    const movies = await api.coming()
    res.json(movies)
  } catch (e) {
    next(e)
  }
})

// query params can have:
// theater: (required) theater id
// date: (optinal) show date
app.get('/movie/:id/schedule', async (req, res, next) => {
  if (!req.params.id || !req.params.theater) {
    res.status(400).end()
    return
  }

  try {
    const schedule = await api.movieSchedule(
      req.params.id,
      req.params.theater,
      req.params.date
    )
    res.json(schedule)
  } catch (e) {
    next(e)
  }
})

const port = process.env.PORT || '3000';

const server = app.listen(port, () => {
  console.log('server stated listening on: ' + port)
})

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)

function shutdown() {
  console.log('shutting down server')
  server.close(() => {
    process.exit(1)
  })

  setTimeout(() => {
    console.log('shutting down timeout, force exit process')
    process.exit(1)
  }, 30000)
}
