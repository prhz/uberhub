'use client'

import Image from 'next/image'
import { vacancy } from '../_lib/definitions'
import { formatDate } from '../_lib/utils'
import { useState } from 'react'

export default function VacancyCard({ vacancy, search, show_data }: { vacancy: vacancy, search: string, show_data: boolean }) {
    const [reported, setReported] = useState<boolean>(false)
    return (
        <div id={vacancy.advertiser} className={`w-[100%] bg-[#FAFAFA] rounded-md shadow flex flex-grow`}>
            <div className='w-2 rounded-l bg-[#5000b7]'></div>
            <div className='px-8 py-6 w-full'>
                <div className="flex justify-between items-center mb-2">
                    <div className='flex items-center gap-2'>
                        {
                            vacancy.has_image ?
                                (
                                    <Image
                                        src={`/img/vacancy-${vacancy.id}.png`}
                                        className='rounded'
                                        alt='pfp'
                                        height={30}
                                        width={30}
                                    />
                                ) :
                                (
                                    <div className='text-[#fafafa] font-bold flex items-center justify-center bg-[#5000b7] px-3 py-1.5 rounded'>
                                        {vacancy.advertiser[0]}
                                    </div>
                                )
                        }

                        <div className="text-zinc-800 font-bold text-2xl py-1">
                            {vacancy.advertiser}
                        </div>
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
                    {
                        vacancy.limit_date != undefined ? (
                            <div className="text-[#5000b7] text-xs self-end">
                                {`vagas abertas até ${formatDate(vacancy.limit_date)}`}
                            </div>
                        ) :
                            (
                                <div className="text-zinc-500 text-xs self-end">
                                    {`postado em: ${formatDate(vacancy.date)}`}
                                </div>
                            )
                    }
                    <div className='flex items-center gap-2'>
                        <abbr title="Sinalizar erro no post">
                            <Image
                                width={25}
                                height={25}
                                src='/svg/flag.svg'
                                alt=''
                                className={`cursor-pointer ${reported ? '' : 'grayscale'} hover:grayscale-0 transition ease-out duration-200 rounded-full`}
                                onClick={() => {
                                    if (reported) {
                                        vacancy.reports.pop()
                                        setReported(false)
                                        return
                                    }
                                    vacancy.reports.push('err')
                                    setReported(true)
                                }}
                            />
                        </abbr>
                        <a href={vacancy.link} target="_blank" className="" onClick={() => { vacancy.visit_count++ }}>
                            <div className="py-1 bg-[#5000b7] text-[#fafafa] rounded text-sm font-semibold px-2 flex gap-1">
                                saiba mais
                            </div>
                        </a>
                    </div>
                    
                </div>
                {show_data && (
                    <div className='w-full text-center bg-zinc-200 rounded font-semibold text-sm mt-3 text-zinc-800'>
                        {vacancy.visit_count} visitas em {new Date().getDate() - vacancy.date.getDate()} dias no ar. Média de aprox {(vacancy.visit_count / (new Date().getDate() - vacancy.date.getDate())).toFixed(0)} visitas/dia
                    </div>
                )}
            </div>
        </div>
    )
}