import { URLs, makeDCQueryParam, makeMovieURL } from './utils'
import { getMovieDetail } from './movie'

import axios from 'axios'

// get now playing movies from toho api
export async function playing() {
    const movies = await getMovies(URLs.PLAYING)
    await fillMovieDetails(movies)

    return movies
}

export async function coming() {
    const movies = await getMovies(URLs.COMING)
    await fillMovieDetails(movies)

    return movies

}

async function getMovies(url) {
    console.debug('calling %s', url)

    const response = await axios.get(url, {
        params: makeDCQueryParam()
    })

    const result = response.data

    if (result.data && result.data.length > 0) {
        console.debug('got %d movies', result.data.length)
        return result.data.map(m => ({
            title: m.name,
            id: m.mcode,
            url: makeMovieURL(m.mcode),
        }))
    }

    return []
}

async function fillMovieDetails(movies) {
    for (const movie of movies) {
        if (movie.id) {
            Object.assign(movie, await getMovieDetail(movie.id))
        }
    }
}