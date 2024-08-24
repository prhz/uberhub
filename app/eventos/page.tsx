'use client'

import { events, eventOrderOptions } from "../_lib/placeholder-data"
import EventCard from "./card"
import { Suspense, useState } from "react";
import Image from "next/image";
import FilterCard from "./FilterCard";
import { event, eventfilterData, orderOption } from "../_lib/definitions";
import { useSearchParams } from "next/navigation";

export default function Home() {
    const name = useSearchParams().get('name')
    const [eventSearch, setEventSearch] = useState<string>(name ? name : '')
    const [tagArr, setTagArr] = useState<string[]>([])
    const [orderBy, setOrderBy] = useState<orderOption>(eventOrderOptions[0])
    const [orderBool, setOrderBool] = useState<boolean>(false)
    const [types, setTypes] = useState<string[]>([])
    const [dateStart, setDateStart] = useState<Date | undefined>()
    const [dateEnd, setDateEnd] = useState<Date | undefined>()

    const filterData: eventfilterData = {
        tags: tagArr,
        setTags: setTagArr,
        orderBy: orderBy,
        setOrderBy: setOrderBy,
        date_start: dateStart,
        setDate_start: setDateStart,
        date_end: dateEnd,
        setDate_end: setDateEnd,
        orderBool: orderBool,
        setOrderBool: setOrderBool,
        types: types,
        setTypes: setTypes
    }

    return (
        <Suspense fallback={<div>loading...</div>}>
        <main className="w-full min-h-[100dvh] flex justify-center">
            <div className='w-[70%] flex flex-col gap-2'>
                <div className="w-full text-3xl font-bold text-zinc-800 p-2 px-4 bg-[#fafafa] rounded shadow mt-4">
                    Eventos
                </div>
                <div className="w-full flex gap-2">
                    <div className="w-[70%] h-fit flex flex-col gap-2">
                        <div
                            className="p-4 bg-[#fafafa] rounded flex justify-between shadow"
                        >
                            <div
                                className='bg-[#fefefe] flex items-center justify-between w-full rounded px-1'
                            >
                                <input
                                    type="text"
                                    placeholder="buscar..."
                                    className="w-full focus:outline-none h-[25px] rounded text-zinc-800 text-sm pl-1 bg-transparent"
                                    onChange={
                                        (e) => {
                                            setEventSearch(e.target.value)
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
                            events.filter(e => e.state === 'accepted')
                                .filter(e => (dateStart === undefined || dateEnd === undefined) || e.days.some(day => (day.start >= dateStart && day.start <= dateEnd) || (day.end == undefined || day.end >= dateStart && day.end <= dateEnd)))
                                .filter(ev => types.length === 0 || types.includes(ev.type))
                                .filter(ev => ev.advertiser.toLowerCase().includes(eventSearch.toLowerCase()) || ev.name.toLowerCase().includes(eventSearch.toLowerCase()))
                                .filter(ev => tagArr.length === 0 || tagArr.some(t => ev.tags.includes(t))).
                                sort((a: event, b: event) => (a.days[0].start > b.days[0].start) ? -1 : (a.days[0].start < b.days[0].start) ? 1 : 0)
                                .sort(
                                        (a: event, b: event) => { 
                                        let key = orderBy.value as keyof event
                                        if (orderBy.value == 'date') {
                                            if (orderBool) {
                                                return (a.days[0].start < b.days[0].start) ? -1 : (a.days[0].start > b.days[0].start) ? 1 : 0
                                            }
                                            return (a.days[0].start > b.days[0].start) ? -1 : (a.days[0].start < b.days[0].start) ? 1 : 0
                                        }
                                        if (orderBool) {
                                            return ((a[key] || '') < (b[key] || '')) ? -1 : ((a[key] || '') > (b[key] || '')) ? 1 : 0
                                        } 
                                        return ((a[key] || '') > (b[key] || '')) ? -1 : ((a[key] || '') < (b[key] || '')) ? 1 : 0 
                                    })
                                .map(ev => (<EventCard event={ev} search={eventSearch.toLowerCase()} shadow />))
                        }
                    </div>
                    <FilterCard data={filterData} />
                </div>
            </div>
        </main>
        </Suspense>
    )
}