import { URLs } from './utils'

export function movieSchedule(id, theaterID, date) {
    let url = ''
    if (date) {
        url = URLs.SCHEDULE_IN_DATE
    } else {
        url = URLs.SCHEDULE_IN_THEATER
    }

    
}