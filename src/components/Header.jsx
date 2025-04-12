import { Code, Github, User } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <header className='fixed z-50 flex justify-center items-center border-b-4 border-gray-900 w-full bg-zinc-950 text-white'>
      <div className='flex gap-2 items-center hover:bg-gray-900 p-3 rounded-t-md'>
        <User/>
        <a href="#aboutMe">Sobre mim</a>
      </div>

      <div className='flex gap-2 items-center hover:bg-gray-900 p-3 rounded-t-md'>
        <Code/>
        <a href="#stacks">Stacks</a>
      </div>

      <div className='flex gap-2 items-center hover:bg-gray-900 p-3 rounded-t-md'>
        <Github/>
        <a href="#repositories">Repositórios</a>
      </div>
    </header>
  )
}

export default Header