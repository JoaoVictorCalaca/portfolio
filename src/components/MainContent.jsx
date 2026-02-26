import { Download, GitBranch } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function MainContent() {
  return (
    <div style={{ backgroundImage: 'url("/hero-bg.jpg")' }} className='w-full h-screen bg-cover p-6'>
      <div className='flex sm:flex-row flex-col justify-center items-center gap-4'>
        <div className='flex flex-col gap-4 sm:items-start items-center'>
          <h1 className='text-6xl font-bold text-cyan-500'>{'<João Víctor/>'}</h1>

          <p className='sm:w-[60%] w-full'>Técnico em informática para Internet e graduando em Eng. de Software na <a className='underline' href='https://www.unialfa.com.br/graduacao/engenharia-de-software/?tipo=bacharelado'>Uni Alfa</a></p>

          <a className='bg-cyan-600 p-4 rounded-md w-60 flex items-center font-bold gap-4 hover:scale-105 transition duration-300' target='_blank' href="/Curriculo.pdf" download> <Download /> Baixar currículo</a>
          
          <a className='hover:bg-cyan-600 border-cyan-600 border-2 p-4 rounded-md w-60 flex items-center font-bold gap-4 hover:scale-105 transition duration-300' target='_blank' href="https://github.com/joaovictorcalaca"> <GitBranch /> Meu Github</a>
        </div>

        <div>
          <Image className='w-full h-full rounded-md' src='/elements.png' width={500} height={500} alt='Character' />
        </div>
      </div>
    </div>
  )
}

export default MainContent