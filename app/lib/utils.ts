import { vacancy } from "./definitions";

export function authVacancy(vac: vacancy): boolean {
    return (vac.id < 1)                              ? false : // id is 0 or lower
           (vac.link.length === 0)                   ? false : // link is empty
           (vac.vacancies.length === 0)              ? false : // vacancies is empty
           (vac.advertiser.length === 0)             ? false : // advertiser is empty
           (vac.vacancies.some(v => v.length === 0)) ? false : // any vacancy is empty
                                                       true
}
