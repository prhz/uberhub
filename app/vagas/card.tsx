'use client'

import Image from 'next/image'
import { vacancy } from '../_lib/definitions'
import { formatDate } from '../_lib/utils'

export default function VacancyCard({ vacancy, search }: {vacancy: vacancy, search: string}) {
    return (
        <div className="h-fit w-[100%] bg-[#FAFAFA] rounded-md shadow flex">
            <div className='h-full w-2 rounded-l bg-[#5000b7]'></div>
            <div className='px-8 py-6 w-full'>
            <div className="flex justify-between items-center mb-2">
                <div className="text-zinc-800 font-bold text-2xl py-1">
                    {vacancy.advertiser}
                </div>
                {(vacancy.featured_tier > 1) && (<div className="text-sm text-[#812cf0] font-semibold px-2 py-1 bg-zinc-50 rounded">destaque</div>)}
            </div>
            <div className="flex flex-col gap-1">
                {
                    (vacancy.vacancies.some(v => v.toLowerCase().includes(search))) ? 
                        (vacancy.vacancies.filter(v => v.toLowerCase().includes(search)).map((v, idx) => (
                            <div key={idx + 1} className="w-[100%] h-fit bg-[#ebebeb] rounded flex gap-1 text-bold text-sm items-center text-zinc-800 font-semibold">
                                <div className="w-1.5 h-6 bg-[#5000b7] rounded-l"></div>
                                {v}
                            </div>
                        ))) : 
                        (vacancy.vacancies.map((v, idx) => (
                            <div key={idx + 1} className="w-[100%] h-fit bg-[#fafafa] rounded flex gap-1 text-bold text-sm items-center text-zinc-800 font-semibold">
                                <div className="w-1.5 h-6 bg-[#5000b7] rounded-l"></div>
                                {v}
                            </div>
                        )))
                }
            </div>
            <div className="flex flex-wrap gap-1 w-[60%] mt-5 mb-3">
                {vacancy.tags.map((tag, idx) => (<div key={idx + 1} className="text-xs text-[#fafafa] bg-zinc-400 rounded px-2 py-1 items-center">{tag}</div>))}
            </div>
            <div className="flex items-center justify-between w-[100%]">
                <div className="text-zinc-500 text-xs self-end">
                    {`postado em: ${formatDate(vacancy.date)}`}
                </div>
                <a href={vacancy.link} target="_blank" className="" onClick={() => {vacancy.visit_count++}}>
                    <div className="py-1 bg-[#5000b7] text-[#fafafa] rounded text-sm font-semibold px-2 flex gap-1">
                        link
                        <Image width={20} height={20} src="/svg/link.svg" alt="link svg" />
                    </div>
                </a>
            </div>
            </div>
        </div>
    )
}