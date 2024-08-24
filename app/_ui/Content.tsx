'use client'

import '@/app/globals.css'
import NavCard from './NavCard'
import { Suspense, useState } from 'react'
import Image from 'next/image'

export default function Content({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const [nav, setNav] = useState<boolean>()
    return (
        <>
            <header className='z-10 w-full sticky top-0 h-[50px] bg-[#5000b7] flex justify-between items-center px-4'>
                <a href="/"><Image src='/img/logo.png' alt='uberhub logo' height={0} width={100} /></a>
                <div
                    className='w-full flex justify-end items-center font-semibold gap-5 px-10'
                >
                    {
                        !nav &&
                        (
                            <>
                                <a href="/vagas" className='hover:underline'>
                                    Vagas
                                </a>
                                <a href="/eventos" className='hover:underline'>
                                    Eventos
                                </a>
                            </>

                        )
                    }
                </div>
                <Image
                    src='/svg/menu.svg'
                    alt='menu svg'
                    className='cursor-pointer'
                    height={28}
                    width={28}
                    onClick={() => { setNav(!nav) }}
                />
            </header>
            <Suspense>{children}</Suspense> 
            <nav className={`fixed ${nav ? 'nav-o' : 'nav-c'} min-h-full top-[50px] bg-[#5000b7] duration-300 flex flex-col items-center gap-1 p-2`}>
                <NavCard name='Vagas' href='/vagas' svg='/svg/vacancy.svg' />
                <NavCard name='Eventos' href='/eventos' svg='/svg/event.svg' />
            </nav>
            <footer className='w-full min-h-[100px] mt-5'></footer>
        </>
    )
}