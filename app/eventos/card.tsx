import { useState } from 'react'
import { event } from '../_lib/definitions'
import Image from 'next/image'
import { calendarLink } from '../_lib/utils'

export default function EventCard({ event, search, show_data }: { event: event, search: string, show_data: boolean }) {
    const [reported, setReported] = useState<boolean>(false)
    
    return (
        <div className={`text-zinc-800 bg-[#fafafa] rounded w-full flex shadow flex-grow ${(event.days[event.days.length - 1].start < new Date()) && 'brightness-95'}`}>
            <div className='h-full w-2 rounded-l bg-[#5000b7]'></div>
            <div className='px-8 py-6 w-full'>
                <div className='flex justify-between mb-2'>
                    <div className='flex items-center gap-2'>
                        {
                            event.has_image ?
                                (
                                    <Image
                                        src={`/img/event-${event.id}.png`}
                                        className='rounded'
                                        alt='pfp'
                                        height={30}
                                        width={30}
                                    />
                                ) :
                                (
                                    <div className='text-[#fafafa] font-bold flex items-center justify-center bg-[#5000b7] px-3 py-1.5 rounded'>
                                        {event.advertiser[0]}
                                    </div>
                                )
                        }
                        <div className='text-xl font-bold'>{event.name}</div>
                    </div>
                    <div className='flex gap-1 ml-3'>
                        {(event.featured_tier > 1) && (<div className="font-semibold text-sm rounded bg-[#fafafa] h-fit w-fit px-2 py-1 text-[#5000b7]">destaque</div>)}
                        {(event.days[event.days.length - 1].start < new Date()) && (<div className='font-bold text-sm rounded bg-[#dd3232] h-fit w-fit px-2 py-1 text-[#fefefe]'>Concluído</div>)}
                    </div>
                </div>
                <div className='font-semibold'>{event.advertiser}</div>
                <div className='font-semibold text-xs rounded bg-[#5000b7] my-2 h-fit w-fit px-2 py-1 text-[#fafafa]'>{event.type}</div>
                {event.type === 'presencial' && (
                    <div className="flex gap-1 mt-1">
                        <Image
                            src='/svg/pin.svg'
                            alt=''
                            width={15}
                            height={15}
                        />
                        <div className='text-sm font-semibold'>{event.adress}</div>
                    </div>
                )}
                <div className='w-full flex flex-col gap-1 font-semibold text-sm mt-2'>
                    Datas
                    {
                        event.days.map((day, index) => (
                            <div key={index + 1} className='text-sm rounded bg-[#EBEBEB] pr-2 min-h-6 h-fit w-full text-zinc-800 flex gap-1 items-center'>
                                <div className="h-6 w-1 bg-[#5000b7] rounded-l"></div>
                                {`${day.start.getDate().toString().padStart(2, '0')}/${(day.start.getMonth() + 1).toString().padStart(2, '0')}/${day.start.getFullYear()} (${(day.start.getHours()).toString().padStart(2, '0')}:${day.start.getMinutes().toString().padStart(2, '0')}h${(day.end != undefined) ? ` - ${(day.end?.getHours()).toString().padStart(2, '0')}:${day.end?.getMinutes().toString().padStart(2, '0')}h` : ''})`}
                            </div>
                        ))
                    }
                </div>
                <div className="w-[60%] flex flex-wrap gap-1 py-2">
                    {
                        event.tags.map(tag => (
                            <div className='text-xs font-semibold text-[#fafafa] w-fit h-fit bg-zinc-400 rounded px-2 py-1 items-center'>{tag}</div>
                        ))
                    }

                </div>
                <div className='flex items-center gap-2 justify-between'>
                    <div>
                        <abbr title="Sinalizar erro no post">
                            <Image
                                width={25}
                                height={25}
                                src='/svg/flag.svg'
                                alt=''
                                className={`cursor-pointer ${reported ? '' : 'grayscale'} hover:grayscale-0 transition ease-out duration-200 rounded-full`}
                                onClick={() => {
                                    if (reported) {
                                        event.reports.pop()
                                        setReported(false)
                                        return
                                    }
                                    event.reports.push('err')
                                    setReported(true)
                                }}
                            />
                        </abbr>
                    </div>
                    <div className='flex gap-2 items-center'>
                        {event.days[event.days.length - 1].start > new Date() && (
                            <abbr title="Adicionar na agenda" className=''>
                                <a href={calendarLink(event)} target="_blank">
                                    <Image
                                        src='/svg/calendar.svg'
                                        alt=''
                                        height={30}
                                        width={30}
                                        className='cursor-pointer'
                                    />
                                </a>
                            </abbr>
                        )}
                        
                        <a href={event.link} target="_blank" className="" onClick={() => { event.visit_count++ }}>
                            <div className="py-1 bg-[#5000b7] text-[#fafafa] rounded text-sm font-semibold px-2 flex gap-1">
                                saiba mais
                            </div>
                        </a>
                    </div>
                </div>
                {show_data && (
                    <div className='w-full text-center bg-zinc-200 rounded font-semibold text-sm mt-3'>
                        {event.visit_count} visitas em {new Date().getDate() - event.date.getDate()} dias no ar. Média de aprox {(event.visit_count / (new Date().getDate() - event.date.getDate())).toFixed(0)} visitas/dia
                    </div>
                )}
            </div>
        </div>
    )
}

// ref: https://imgur.com/QVRkK4e