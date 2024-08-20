'use client'

import '@/app/globals.css'
import NavCard from './NavCard'
import { useState } from 'react'
import Image from 'next/image'

export default function Content({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const [nav, setNav] = useState<boolean>()
    return (
        <>
            <header
                className='w-full sticky top-0 h-[50px] bg-[#5000b7] flex justify-between items-center px-4'
            >
                <a href="/">
                <Image
                    src='/img/logo.png'
                    alt='uberhub logo'
                    height={0}
                    width={100}
                />
                </a>
                <Image
                    src='/svg/menu.svg'
                    alt='menu svg'
                    className='cursor-pointer'
                    height={28}
                    width={28}
                    onClick={
                        () => {
                            setNav(!nav)
                        }
                    }
                />
            </header>
            {children}
            <nav
                className={`fixed ${nav ? 'nav-o' : 'nav-c'} min-h-full top-[50px] bg-[#5000b7] duration-300 flex flex-col items-center gap-1 p-2`}
            >
               <NavCard name='Vagas' href='/vagas' svg='/svg/vacancy.svg'/>
            </nav>
            <footer
                className='w-full min-h-[100px] bg-zinc-200 mt-5'
            >

            </footer>
        </>
    )
}