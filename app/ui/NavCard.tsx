import Image from "next/image"

export default function NavCard({ 
    name, 
    svg, 
    href 
}: {
    name: string,
    svg: string,
    href: string
}) {
    return (
        <a 
            href={href}
            className="group w-full py-1 px-2 flex flex-col gap-1 items-center text-[#fafafa]"
        >
        <div
            className="w-full h-full flex gap-2 items-center"
        >
            <Image 
                src={svg}
                alt=''
                className="group-hover:fill-[#5000b7]"
                height={25}
                width={25}
            />
            <div
                className="font-bold"
            >
                {name}
            </div>
        </div>
        <div className="w-full h-[2px] flex items-center justify-center"><div className='transition-all h-[2px] w-0 group-hover:w-full bg-[#fafafa] rounded-full'></div></div>
        </a>
    )
}