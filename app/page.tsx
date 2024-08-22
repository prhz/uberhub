'use client'

import Image from "next/image";
import { useState } from 'react'
import { Calendar } from "@nextui-org/calendar"
import { DateValue } from "@nextui-org/calendar";
import { homeCard } from "./_lib/definitions";

function HomeCard({ title, icon, numbers, color, desc, subtitle }: homeCard) {

    return (
        <div className="text-zinc-800 bg-[#fafafa] w-fit h-fit py-5 px-8 rounded-lg shadow-lg flex-grow">
            <div className="text-xl font-bold flex">
                {title}
                {subtitle && (
                    <div
                        className="font-normal text-sm self-end ml-1 m-[.15em] text-zinc-700"
                    >
                        | {subtitle}
                    </div>
                )}
            </div>

            <div className="flex gap-2 items-center">
                <Image
                    src={icon}
                    alt=''
                    height={75}
                    width={75}
                />
                <div>
                    <div className="text-3xl font-bold">
                        {numbers}
                    </div>
                    {desc && (
                        <div
                            className=""
                            dangerouslySetInnerHTML={{ __html: desc }}
                        >
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <main className="flex justify-center min-h-screen w-full gap-x-4">
            <div className="w-[80%]">
                <div className="w-full flex flex-wrap gap-2 mt-10">
                    <HomeCard
                        title="Membros"
                        icon="/svg/members.svg"
                        numbers="+20 mil"
                        color="#4154f1"
                        desc="<span class='font-bold text-[#4154f1]'>crescendo</span> ainda mais"
                    />
                    <HomeCard
                        title="Programação"
                        icon="/svg/programming.svg"
                        numbers="+5.000"
                        color="#ff771d"
                        desc="<span class='font-bold text-[#ff771d]'>jovens com acesso</span> a programação"
                        subtitle="Gratuita"
                    />
                    <HomeCard
                        title="Vagas"
                        icon="/svg/vagas.svg"
                        numbers="+1.000"
                        color="#4154f1"
                        desc="<span class='font-bold text-[#4154f1]'>sempre</span> divulgando"
                        subtitle="Divulgadas"
                    />
                    <HomeCard
                        title="Empresas"
                        icon="/svg/companies.svg"
                        numbers="+500"
                        color="#2eca6a"
                        desc="<span class='font-bold text-[#2eca6a]'>empresas</span> de inovação na cidade"
                        subtitle="Tech"
                    />
                </div>
                <div className="bg-[#fafafa] w-fit h-fit py-5 px-8 mt-5 rounded-lg shadow-lg flex-grow font-semibold flex flex-col items-center">
                    <div className="w-full">Total de Startups no Sistema: 269</div>
                    <Image
                        src='/svg/block_graph.svg'
                        alt=''
                        width={2000}
                        height={0}
                    />
                </div>
                <div className="flex flex-wrap gap-5">
                    <div className="bg-[#fafafa] w-fit h-full py-5 px-8 mt-5 rounded-lg shadow-lg flex-grow flex-col font-semibold flex items-center">
                        <div className="w-full">Público Alvo</div>
                        <Image
                            src='/svg/publico_alvo.svg'
                            alt=''
                            width={489}
                            height={0}
                        />
                    </div>
                    <div className="bg-[#fafafa] w-fit h-full py-5 px-8 mt-5 rounded-lg shadow-lg flex-grow flex-col font-semibold flex items-center">
                        <div className="w-full">Startups por Setor x Fase</div>
                        <Image
                            src='/svg/startups-fase.svg'
                            alt=''
                            width={766}
                            height={0}
                        />
                    </div>
                </div>
                <div className="bg-[#fafafa] w-fit h-fit py-5 px-8 mt-5 rounded-lg shadow-lg flex-grow flex-col font-semibold flex items-center">
                        <div className="w-full">Startups por Setor x Modelo de Negócio</div>
                        <Image
                            src='/svg/startups-modelo.svg'
                            alt=''
                            width={2000}
                            height={0}
                        />
                    </div>
            </div>
        </main>
    );
}
