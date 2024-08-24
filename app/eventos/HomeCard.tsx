import { event } from "../_lib/definitions"
import Image from "next/image"
import { formatDate } from "../_lib/utils"

export default function EventHomeCard({ event }: { event: event }) {
    return (
        <a href={`/eventos?name=${event.name}`} className="cursor-pointer w-full">
            <div className="bg-[#fefefe] w-full rounded px-8 py-5 hover:shadow-xl transition ease-out duration-200">
                <div className="flex gap-2">
                    {
                        event.has_image ?
                            (
                                <Image
                                    src={`/img/event-${event.id}.png`}
                                    alt=''
                                    height={40}
                                    width={40}
                                />
                            ) :
                            (
                                <div className="text-xl font-bold flex items-center justify-center px-3 rounded bg-[#5000b7] text-[#fafafa]">
                                    {event.advertiser[0]}
                                </div>
                            )
                    }
                    <div className="w-full flex flex-col">
                        <div className="w-full flex justify-between">
                            <div className="text-lg font-bold truncate text-ellipsis h-[25px] w-[90%]">
                                {event.name}
                            </div>
                        </div>
                        <div className="text-zinc-500 text-xs font-semibold">
                            {event.advertiser}
                        </div>
                    </div>
                </div>
                <div className="w-[100%] h-fit bg-[#ebebeb] rounded flex gap-1 text-bold text-sm items-center text-zinc-800 font-semibold my-2">
                    <div className="w-1.5 h-6 bg-[#5000b7] rounded-l"></div>
                    {`${event.days.length} dia${event.days.length < 1? 's' : ''} de evento`}
                </div>
                <div className="flex gap-1 overflow-auto whitespace-nowrap">
                    {[event.type, ...event.tags].map((tag, idx) => (<div key={idx + 1} style={{backgroundColor: tag == event.type ? '#5000b7': '#a1a1aa'}} className="text-xs text-[#fafafa] rounded px-2 py-1 items-center">{tag}</div>))}
                </div>
            </div>
        </a>
    )
}