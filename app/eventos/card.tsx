import { event } from '../_lib/definitions'
import Image from 'next/image'

export default function EventCard({ event, search }: { event: event, search: string }) {
    return (
        <div className='text-zinc-800 bg-[#fafafa] rounded w-full flex shadow'>
            <div className='h-full w-2 rounded-l bg-[#5000b7]'></div>
            <div className='w-full h-full pl-3 py-5 pr-4'>
                <div className='flex justify-between'>
                <div className='text-xl font-bold'>{event.name}</div>
                    <div className='flex gap-1 ml-3'>
                        {(event.featured_tier > 1) && (<div className="font-semibold text-sm rounded bg-[#fafafa] h-fit w-fit px-2 py-1 text-[#5000b7]">destaque</div>)}
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
                                {`${day.start.getDate().toString().padStart(2, '0')}/${(day.start.getMonth() + 1).toString().padStart(2, '0')}/${day.start.getFullYear()} (${(day.start.getHours() + 1).toString().padStart(2, '0')}:${day.start.getMinutes().toString().padStart(2, '0')}h${(day.end != undefined) ? ` - ${day.end?.getHours().toString().padStart(2, '0')}:${day.end?.getMinutes().toString().padStart(2, '0')}h` : ''})`}
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
                        onClick={() => { event.visit_count++ }}
                    >
                        Saiba mais
                    </a>
                </div>
            </div>
        </div>
    )
}

// ref: https://imgur.com/QVRkK4e