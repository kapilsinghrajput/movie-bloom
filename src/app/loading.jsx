"use client";

import Image from "next/image";

export default function loading() {
  return (
    <div className='flex justify-center items-center'>
        <Image src="bouncing-circles.svg" alt="loading" width={300} height={100}></Image>
    </div>
  )
}
