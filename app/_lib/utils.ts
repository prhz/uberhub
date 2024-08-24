import { vacancy, event, post } from "./definitions";

export function authVacancy(vac: vacancy): boolean {
    return (vac.id < 1)                              ? false : // id is 0 or lower
           (vac.link.length === 0)                   ? false : // link is empty
           (vac.vacancies.length === 0)              ? false : // vacancies is empty
           (vac.advertiser.length === 0)             ? false : // advertiser is empty
           (vac.vacancies.some(v => v.length === 0)) ? false : // any vacancy is empty
                                                       true
}

export const formatDate = (date: Date) => {
    const f = (n: number) => n.toString().padStart(2, '0')
    return `${f(date.getDate())}/${f(date.getMonth())}/${date.getFullYear()}`
}

export const eventsByDate = (events: event[], [start, end]: [start: Date, end: Date]) => {
    return events.filter((event) => (
        event.days.some((day) => (
            (day.start >= start) && (day.end == undefined || day.end <= end)
        ))
    ))
}

export const getFeaturedVac = (arr: vacancy[]) => {
    arr.sort((a: vacancy, b: vacancy) => (
        a.featured_tier < b.featured_tier ? -1 : a.featured_tier > b.featured_tier ? 1 : 0
    )).slice(0, 3)
}

const pad = (num: number) => num.toString().padStart(2, '0')

export const dateForURL = (date: Date) => `${date.getFullYear()}${pad(date.getMonth()+1)}${pad(date.getDate())}T${pad(date.getHours()+1)}${pad(date.getMinutes())}${pad(date.getMilliseconds())}-0300`

export const calendarLink = (event: event) => {
    const text = event.name.replace(' ', '+')
    const len = event.days.length - 1
    const [dateStart, dateEnd] = [event.days[0].start, event.days[len].end || event.days[len].start]
    const dates = `${dateForURL(dateStart)}/${dateForURL(dateEnd)}`
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}`
    return url
}
