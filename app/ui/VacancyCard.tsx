'use client'

import { vacancy } from '../lib/definitions'
import { useState } from 'react'
import Image from 'next/image'

export default function VacancyCard({ vacancy, search }: {vacancy: vacancy, search: string}) {
    return (
        <div className="h-fit w-[100%] bg-zinc-200 px-8 py-6 rounded-md">
            <div className="flex justify-between items-center mb-2">
                <div className="text-zinc-800 font-bold text-2xl py-1">
                    {vacancy.advertiser}
                </div>
                {(vacancy.featured_tier > 1) && (<div className="text-sm text-[#812cf0] font-semibold px-2 py-1 bg-zinc-50 rounded">featured</div>)}
            </div>
            <div className="flex flex-col gap-1">
                {
                    (vacancy.vacancies.some(v => v.toLowerCase().includes(search))) ? 
                        (vacancy.vacancies.filter(v => v.toLowerCase().includes(search)).map((v, idx) => (
                            <div key={idx + 1} className="w-[100%] h-fit bg-zinc-300 rounded flex gap-1 text-bold text-sm items-center text-zinc-800 font-semibold">
                                <div className="w-1.5 h-6 bg-[#5000b7] rounded-l"></div>
                                {v}
                            </div>
                        ))) : 
                        (vacancy.vacancies.map((v, idx) => (
                            <div key={idx + 1} className="w-[100%] h-fit bg-zinc-300 rounded flex gap-1 text-bold text-sm items-center text-zinc-800 font-semibold">
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
                    {`postado em: ${vacancy.date.getDate().toString().padStart(2, '0')}/${vacancy.date.getMonth().toString().padStart(2, '0')}/${vacancy.date.getFullYear()}`}
                </div>
                <a href={vacancy.link} target="_blank" className="">
                    <div className="py-1 bg-[#5000b7] text-[#fafafa] rounded text-sm font-semibold px-2 flex gap-1">
                        link
                        <Image width={20} height={20} src="/svg/link.svg" alt="link svg" />
                    </div>
                </a>
            </div>
        </div>
    )
}