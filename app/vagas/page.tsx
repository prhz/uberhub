'use client'

import '@/app/globals.css'
import Image from "next/image"
import VacancyCard from "./card"
import FilterCard from "./FilterCard"
import { Suspense, use, useState } from "react"
import { vacancies, vacOrderOptions } from "../_lib/placeholder-data"
import { vacancy, orderOption, vacfilterData } from "../_lib/definitions"
import { useSearchParams } from 'next/navigation'

export default function Home() {
    const advertiser = useSearchParams().get('advertiser')
    const [vacancySearch, setVacancySearch] = useState<string>('')
    const [tagSearch, setTagSearch] = useState<string>('')
    const [tagArr, setTagArr] = useState<string[]>([])
    const [orderBy, setOrderBy] = useState<orderOption>(vacOrderOptions[0])
    const [advertisers, setAdvertisers] = useState<string[]>(advertiser ? [advertiser]: [])
    const [orderBool, setOrderBool] = useState<boolean>(false)

    const filterData: vacfilterData = {
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
            <div className={`w-[70%] flex flex-col gap-2`}>
                <div className="w-full text-3xl font-bold text-zinc-800 p-2 px-4 bg-[#fafafa] rounded shadow mt-4">
                    Vagas
                </div>
                <div className="w-full flex gap-2">
                    <div className="w-[70%] flex flex-col gap-2 h-fit">
                        <div
                            className="p-4 bg-[#fafafa] rounded flex justify-between"
                        >
                            <div
                                className='flex items-center justify-between w-full rounded px-1'
                            >
                                <input
                                    type="text"
                                    placeholder="buscar..."
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
                                .filter(vac => vac.advertiser.toLowerCase().includes(vacancySearch.toLowerCase()) || vac.vacancies.some((v: string) => v.toLowerCase().includes(vacancySearch.toLowerCase())))
                                .filter(vac => tagArr.length === 0 || tagArr.some(t => vac.tags.includes(t)))
                                .sort(
                                    (a: vacancy, b: vacancy) => { 
                                        const key = orderBy.value as keyof vacancy
                                        if (orderBool) {
                                            return ((a[key] || '') < (b[key] || '')) ? -1 : ((a[key] || '') > (b[key] || '')) ? 1 : 0
                                        }
                                        return ((a[key] || '') > (b[key] || '')) ? -1 : ((a[key] || '') < (b[key] || '')) ? 1 : 0 
                                    })
                                .map(vac => (<VacancyCard vacancy={vac} search={vacancySearch.toLowerCase()} shadow />))
                        }
                    </div>
                    <FilterCard data={filterData} />
                </div>
            </div>
        </main>
    )
}
