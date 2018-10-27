import theaterData from './data/theater_list'

const Theaters = convert(theaterData)
const [TheatersMap, TheaterSiteMap] = buildMap(Theaters)

export function theaters() {
    return Theaters
}

export function getTheater(id) {
    return TheatersMap[id]
}

export function getTheaterBySite(siteID) {
    return TheaterSiteMap[siteID]
}

function convert(data) {
    return data.map(t => ({
        id: t.THEATER_CD,    
        name: t.THEATER_NAME,
        groupID: t.VIT_GROUP_CD,
        groupName: t.VIT_GROUP_NM,
        nameEnglish: t.THEATER_NAME_ENGLISH,
        siteID: t.SITE_CD,
        siteName: t.SITE_NM,
    }))
}

function buildMap(data) {
    const idMap = {}
    const siteMap = {}
    data.forEach(t => {
        idMap[t.id] = t
        siteMap[t.siteID] = t
    })
    return [idMap, siteMap]
}