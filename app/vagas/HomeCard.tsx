import { vacancy } from "../_lib/definitions"
import Image from "next/image"
import { formatDate } from "../_lib/utils"

export default function VacancyHomeCard({ vacancy }: { vacancy: vacancy }) {
    return (
        <a href={`/vagas?advertiser=${vacancy.advertiser}`} className="cursor-pointer w-full">
            <div className="bg-[#fafafa] w-full rounded px-8 py-5 hover:shadow-xl transition ease-out duration-200">
            <div className="flex gap-2">
                {
                    vacancy.has_image ?
                        (
                            <Image
                                src={`/img/vacancy-${vacancy.id}.png`}
                                alt=''
                                height={40}
                                width={40}
                            />
                        ) :
                        (
                            <div className="text-xl font-bold flex items-center justify-center px-2 py-1 rounded bg-[#5000b7] text-[#fafafa]">
                                {vacancy.advertiser[0]}
                            </div>
                        )
                }
                <div className="w-full flex flex-col">
                    <div className="w-full flex justify-between">
                        <div className="text-lg font-bold truncate text-ellipsis h-[25px]">
                                {vacancy.advertiser}
                        </div>
                        <div className="text-xs font-bold text-[#5000b7]">
                            {vacancy.limit_date && `vagas abertas até ${formatDate(vacancy.limit_date)}`}
                        </div>
                    </div>
                    <div className="text-zinc-500 text-xs font-semibold">
                        {`postado em: ${formatDate(vacancy.date)}`}
                    </div>
                </div>
            </div>
            <div className="w-[100%] h-fit bg-[#ebebeb] rounded flex gap-1 text-bold text-sm items-center text-zinc-800 font-semibold my-2">
                <div className="w-1.5 h-6 bg-[#5000b7] rounded-l"></div>
                {`${vacancy.vacancies.length} vagas anunciadas`}
            </div>
            <div className="flex gap-1 overflow-auto whitespace-nowrap">
                {vacancy.tags.map((tag, idx) => (<div key={idx + 1} className="text-xs text-[#fafafa] bg-zinc-400 rounded px-2 py-1 items-center">{tag}</div>))}
            </div>
        </div>
        </a>
    )
}