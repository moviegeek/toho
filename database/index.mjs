//database
//interact with postgresql db

import pg from 'pg'

export async function createDBClient(option) {
  try {
    const c = new pg.Client(option)
    await c.connect()
  } catch (e) {
    throw e
  }
}

export function initDB(client) {
    const text = `
    CREATE TABLE IF NOT EXISTS theater_movies (
        id GENERATED ALWAYS AS IDENTITY,
        code VARCHAR(20) CONSTRAINT firstkey PRIMARY KEY,
        title VARCHAR(80) NOT NULL,
        title_en VARCHAR(80),
        status VARCHAR(10) NOT NULL,
        date_release DATE
    )
    `

    
}