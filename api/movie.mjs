import cheerio from 'cheerio'
import fetch from 'node-fetch'

import { makeMovieURL } from './utils'

const cache = {}

export async function getMovieDetail(mcode) {
    if (!cache[mcode]) {
        const url = makeMovieURL(mcode)
        console.debug('fetch movie details from url %s', url)

        const res = await fetch(url)
        const html = await res.text()

        console.debug('got html size: %d', html.length)

        cache[mcode] = getDetailFromHTML(html)
    }

    return cache[mcode]
}

function getDetailFromHTML(html) {
    const $ = cheerio.load(html)
    const enTitle = $('.info-title>span.en', '.theater-info').text()

    return {enTitle}
}