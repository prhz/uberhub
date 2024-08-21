import { event } from '../_lib/definitions'
import { events } from '../_lib/placeholder-data'
import Image from 'next/image'
import { Calendar } from "@nextui-org/calendar"

export default function EventCard({ event, search }: { event: event, search: string }) {
    return (
        <div className='text-zinc-800 bg-zinc-200 px-8 py-5 rounded w-full'>
            <div className='flex justify-between items-center'>
            <div className='text-xl font-bold'>{event.name}</div>
            <div className='flex gap-1 items-center'>
            <div className='font-semibold text-xs rounded bg-[#5000b7] h-fit w-fit px-2 py-1 text-[#fafafa]'>{event.type}</div>
               {(event.featured_tier > 1) && (<div className="font-semibold text-xs rounded bg-[#fafafa] h-fit w-fit px-2 py-1 text-[#5000b7]">destaque</div>)}
            </div>
            </div>
            <div className='font-semibold'>{event.advertiser}</div>
            
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
                    <div key={index+1} className='text-sm rounded bg-[#fafafa] pr-2 min-h-6 h-fit w-full text-zinc-800 flex gap-1 items-center'>
                        <div className="h-6 w-1 bg-[#5000b7] rounded-l"></div>
                        {`${day.start.getDate().toString().padStart(2, '0')}/${(day.start.getMonth()+1).toString().padStart(2, '0')}/${day.start.getFullYear()} (${day.start.getHours()+1}:${day.start.getMinutes()+1} - ${day.end.getHours().toString().padStart(2, '0')}:${day.end.getMinutes().toString().padStart(2, '0')})`}
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
            <div className='w-full flex justify-between'>
                <div></div>
                <a 
                href={event.link}
                target="_blank"
                className='w-fit h-fit rounded text-sm text-[#5000b7] font-bold'
            >
                Saiba mais
            </a>
            </div>
        </div>
    )
}

// ref: https://imgur.com/QVRkK4e