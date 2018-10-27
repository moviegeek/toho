export const URLs = {
    PLAYING: 'https://hlo.tohotheater.jp/data_net/json/movie/TNPI3090.JSON',
    COMING: 'https://hlo.tohotheater.jp/data_net/json/movie/TNPI3080.JSON',
    SCHEDULE_IN_THEATER: 'https://hlo.tohotheater.jp/net/schedule/TNPI3070J02.do',
    SCHEDULE_IN_DATE: 'https://hlo.tohotheater.jp/net/schedule/TNPI3070J01.do',
}

const MOVIE_URL_PREFIX = 'https://hlo.tohotheater.jp/net/movie/TNPI3060J01.do?sakuhin_cd='

export function makeTimestamp() {
    return Math.floor(new Date().getTime() / 1000)
}

export function makeDCQueryParam() {
    return { _dc: makeTimestamp() }
}

export function makeMovieURL(mcode) {
    return `${MOVIE_URL_PREFIX}${mcode}`
}