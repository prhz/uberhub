'use client'

import { useState } from "react"
import { vacancy, orderOption, filterData } from "../lib/definitions"
import { vacancies, tags, orderOptions } from "../lib/placeholder-data"
import VacancyCard from "../ui/VacancyCard"
import FilterCard from "../ui/FilterCard"
import Image from "next/image"
import '@/app/globals.css'

export default function Home() {
    const [vacancySearch, setVacancySearch] = useState<string>('')
    const [tagSearch, setTagSearch] = useState<string>('')
    const [tagArr, setTagArr] = useState<string[]>([])
    const [orderBy, setOrderBy] = useState<orderOption>(orderOptions[0])
    const [advertisers, setAdvertisers] = useState<string[]>([])
    const [orderBool, setOrderBool] = useState<boolean>(false)

    const filterData: filterData = {
        tags: tagArr,
        setTags: setTagArr,
        orderBy: orderBy,
        setOrderBy: setOrderBy,
        advertisers: advertisers,
        setAdvertisers: setAdvertisers,
        orderBool: orderBool,
        setOrderBool: setOrderBool
    }

    return (
        <main className="w-full min-h-[100dvh] flex justify-center">
            <div className={`w-[65%] flex flex-col gap-1`}>
                <div className="w-full text-3xl font-bold text-zinc-800 py-2">
                    Vagas
                </div>
                <div className="w-full flex gap-1">
                    <div className="w-[70%] flex flex-col gap-1">
                        <div
                            className="p-4 bg-zinc-200 rounded flex justify-between"
                        >
                            <div
                                className='bg-[#fefefe] flex items-center justify-between w-full rounded px-1'
                            >
                                <input
                                    type="text"
                                    placeholder="search..."
                                    className="w-full focus:outline-none h-[25px] rounded text-zinc-800 text-sm pl-1 bg-transparent"
                                    onChange={
                                        (e) => {
                                            setVacancySearch(e.target.value)
                                        }
                                    }

                                />
                                <Image
                                    src='/svg/search.svg'
                                    alt='search svg'
                                    className=''
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </div>
                        {
                            vacancies.filter(v => v.state === 'accepted')
                                .filter(vac => advertisers.length === 0 || advertisers.includes(vac.advertiser))
                                .filter(vac => vac.advertiser.toLowerCase().includes(vacancySearch.toLowerCase()) || vac.vacancies.some(v => v.toLowerCase().includes(vacancySearch.toLowerCase())))
                                .filter(vac => tagArr.length === 0 || tagArr.every(t => vac.tags.includes(t)))
                                .sort(
                                    (a: vacancy, b: vacancy) => { 
                                        const key = orderBy.value as keyof vacancy
                                        if (orderBool) {
                                             return (a[key] < b[key]) ? -1 : (a[key] > b[key]) ? 1 : 0
                                        } 
                                        return (a[key] > b[key]) ? -1 : (a[key] < b[key]) ? 1 : 0 
                                    })
                                .map(vac => (<VacancyCard vacancy={vac} search={vacancySearch.toLowerCase()} />))
                        }
                    </div>
                    <FilterCard data={filterData} />
                </div>
            </div>
        </main>
    )
}
