'use client'

import Image from "next/image";
import {useState} from 'react'
import { Calendar } from "@nextui-org/calendar"
import { DateValue } from "@nextui-org/calendar";

export default function Home() {
  const [date, setDate] = useState<DateValue>()
  return (
    <main className="flex min-h-screen w-full gap-x-4">

    </main>
  );
}
