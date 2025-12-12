'use client'
import { File, Linkedin, Wallpaper } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400 w-full min-h-screen flex flex-col justify-center items-center py-4 gap-4'>
      <div className='flex flex-col items-center gap-4 sm:w-1/3 w-1/2'>
        <Link href={'/'}> <Wallpaper /> Portfólio</Link>
        <Link href={'/Curriculo.pdf'} downloadable={true}> <File /> Currículo</Link>
        <Link href={'https://www.linkedin.com/in/joaovictorcalaca'}> <Linkedin /> LinkedIn</Link>
      </div>
    </div>
  )
}

const Link = ({ href, children, downloadable }) => {
  return (
    <a
      className='bg-white text-black w-full p-4 rounded-full flex gap-4 justify-center items-center hover:bg-zinc-800 hover:text-white transition-all duration-500'
      href={href}
      download={downloadable}
    > {children}</a>
  )
}

export default page