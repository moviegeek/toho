//toho background job
//triggered by a periodic cron scheduler, get toho movies and update db

import pg from 'pg'
import * as api from './api'
import config from './config'

async function main() {
  const dbClient = createDBClient(config.db)

  try {
    const playingMovies = await api.playing()

    updatePlaying(dbClient, playingMovies)
  } catch (e) {
    throw e
  }

  try {
    const comingMovies = await api.coming()

    updateComing(dbClient, comingMovies)
  } catch (e) {
    throw e
  }
}

function createDBClient(option) {
  try {
    return new pg.Client(option.url)
  } catch (e) {
    throw e
  }
}

function updatePlaying(client, movies) {

}

function updateComing(client, movies) {

}

main()
