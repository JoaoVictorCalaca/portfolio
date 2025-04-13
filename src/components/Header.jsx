import { Code, Github, User } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <header className='fixed z-50 flex justify-center items-center border-b-4 border-gray-900 w-full bg-zinc-950 text-white'>
      <a href="#aboutMe" className='flex gap-2 items-center hover:bg-gray-900 p-3 rounded-t-md'>
        <User />
        <p>Sobre mim</p>
      </a>

      <a href="#stacks" className='flex gap-2 items-center hover:bg-gray-900 p-3 rounded-t-md'>
        <Code />
        <p>Stacks</p>
      </a>

      <a href="#repositories" className='flex gap-2 items-center hover:bg-gray-900 p-3 rounded-t-md'>
        <Github />
        <p>Repositórios</p>
      </a>
    </header>
  )
}

export default Header