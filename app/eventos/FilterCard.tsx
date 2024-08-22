'use client'

import { eventfilterData } from "../_lib/definitions";
import { eventOrderOptions, event_tags, event_types } from "../_lib/placeholder-data";
import { useState } from "react";
import Image from "next/image";

export default function FilterCard({ data }: { data: eventfilterData }) {
    const [tagSearch, setTagSearch] = useState<string>('')
    return (
        <div className="w-[40%] h-fit bg-[#fafafa] text-zinc-800 rounded p-4">
            <div
                className='bg-[#fefefe] flex items-center justify-between w-full rounded px-1'
            >
                <input
                    type="text"
                    placeholder="buscar..."
                    className="w-full focus:outline-none h-[25px] rounded text-zinc-800 text-sm pl-1 bg-transparent"
                    onChange={
                        (e) => {
                            setTagSearch(e.target.value)
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
            <div className="w-full h-fit flex flex-wrap gap-1 py-2 cursor-pointer">
                {event_tags.filter(tag => tag.toLowerCase().includes(tagSearch.toLowerCase())).map(tag => (
                    <div
                        className='transition-colors ease-out duration-150 w-fit h-fit px-2 py-1 rounded text-xs select-none'
                        style={
                            {
                                backgroundColor: (data.tags.includes(tag)) ? '#5000b7' : '#a1a1aa',
                                color: '#fafafa'
                            }
                        }
                        onClick={() => {
                            if (data.tags.includes(tag)) {
                                data.setTags(data.tags.filter(t => t !== tag))
                            } else {
                                data.setTags([tag, ...data.tags])
                            }
                        }}
                    >
                        {tag}
                    </div>
                ))}
            </div>
            <div className="w-full flex justify-between items-center">
                <div></div>
                <div
                    className='transition-colors ease-out duration-150 text-[#fafafa] cursor-pointer py-1 pr-1 pl-2 font-semibold rounded bg-red-600 h-fit w-fit text-xs flex gap-1 items-center'
                    onClick={() => { data.setTags([]) }}
                >
                    clear
                    <Image
                        src='/svg/cross.svg'
                        alt=''
                        height={15}
                        width={15}
                    />
                </div>
            </div>
            <div className="w-full h-[1px] mt-3 mb-2"></div>
            <div>
                <div className="w-full flex items-center justify-between pr-2 font-semibold gap-1">
                    Ordernar Por
                    {(data.orderBy.name != "em destaque") && (
                        <div
                            className="transition-transform ease-out duration-200 cursor-pointer w-fit h-fit rounded text-xs select-none"
                            onClick={() => {
                                data.setOrderBool(!data.orderBool)
                            }}
                            style={
                                {
                                    transform: (data.orderBool) ? 'rotate(180deg)' : 'rotate(0deg)'
                                }
                            }
                        >
                            <Image
                                src='/svg/arrow.svg'
                                alt=''
                                height={20}
                                width={20}
                            />
                        </div>
                    )}
                </div>
                <div className="w-full flex flex-col gap-1">
                    {eventOrderOptions.map(op => (
                        <div
                            className="transition-colors ease-out duration-200 cursor-pointer w-full rounded px-2 py-1 text-sm select-none"
                            style={
                                {
                                    backgroundColor: (op === data.orderBy) ? '#5000b7' : '#fafafa',
                                    color: (op === data.orderBy) ? '#fafafa' : 'rgb(39 39 42)'
                                }
                            }
                            onClick={() => {
                                if (op.name === data.orderBy.name) return
                                data.setOrderBy(op)
                            }}
                        >
                            {op.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full h-[1px] bg-zinc-400 mt-3 mb-2"></div>
            <div className="flex flex-col font-semibold">
                Tipo
                {event_types.map(type => (
                    <div
                        className="shadow flex gap-2 cursor-pointer w-full rounded px-2 py-1 text-sm items-center select-none"
                        onClick={() => {
                            if (data.types.includes(type)) data.setTypes(data.types.filter(a => a !== type))
                            else data.setTypes([...data.types, type])
                        }}
                    >
                        <div
                            className="h-4 w-4 rounded bg=[#fefefe] transition-colors ease-out duration-200"
                            style={{
                                backgroundColor: (data.types.includes(type)) ? '#5000b7' : '#ececec',
                            }}
                        ><Image src="/svg/check.svg" alt="" height={18} width={18} /></div>
                        {type}
                    </div>
                ))}
            </div>
            <div className="w-full h-[1px] bg-zinc-400 mt-3 mb-2"></div>
            <div className="w-full flex flex-col gap-1 font-semibold">
                Data
                <input
                    className="focus:outline-none text-sm font-normal px-2 rounded"
                    type="date"
                    onChange={e => { data.setDate_start(new Date(e.target.value)) }}
                />
                <input
                    className="focus:outline-none text-sm font-normal px-2 rounded"
                    type="date"
                    onChange={e => { data.setDate_end(new Date(e.target.value)) }}
                />
            </div>
        </div>
    )
}