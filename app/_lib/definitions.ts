import { Dispatch, SetStateAction } from "react"

export type post = {
    id: number
    featured_tier: 1 | 2 | 3

    advertiser: string
    link: string

    tags: string[]
    state: 'pending' | 'accepted' | 'denied'
}

export interface vacancy extends post {
    date: Date
    vacancies: string[]
}

export type eventDay = {
    start: Date
    end : Date
}

export interface event extends post {
    name: string
    adress?: string

    days: eventDay[]

    type: 'online' | 'presencial'
}

export interface course extends post {
    name: string
    limit_date: Date

    period: 'morning' | 'evening' | 'night' | 'self-taught'
    type: 'online' | 'in-person' | 'mixed'
}

export type orderOption = { name: string, value: string }

export type vacfilterData = {
    tags: string[]
    setTags: Dispatch<SetStateAction<string[]>>
    orderBy: orderOption
    setOrderBy: Dispatch<SetStateAction<orderOption>>,
    advertisers: string[]
    setAdvertisers: Dispatch<SetStateAction<string[]>>,
    orderBool: boolean,
    setOrderBool: Dispatch<SetStateAction<boolean>>
}

export type eventfilterData = {
    tags: string[]
    setTags: Dispatch<SetStateAction<string[]>>
    orderBy: orderOption
    setOrderBy: Dispatch<SetStateAction<orderOption>>,
    date_start: Date,
    setDate_start: Dispatch<SetStateAction<Date>>,
    date_end: Date,
    setDate_end: Dispatch<SetStateAction<Date>>,
    orderBool: boolean,
    setOrderBool: Dispatch<SetStateAction<boolean>>,
    types: string[],
    setTypes: Dispatch<SetStateAction<string[]>>
}

export type navData = {
    name: string,
    svg: string,
    href: string
}