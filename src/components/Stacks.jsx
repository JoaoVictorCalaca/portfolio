import { backend, frontend, others } from '@/lib/stacks'
import React from 'react'
import StackCard from './ui/StackCard'

function Stacks() {
  return (
    <div style={{ backgroundImage: 'url("/hero-bg2.jpg")' }} className='w-full bg-cover p-6 flex flex-col items-center gap-6'>
      <h1 className='text-4xl my-4'>Tecnologias que domino</h1>

      <div className='flex gap-4 w-full sm:flex-row flex-col'>
        <div className='sm:w-1/2 flex flex-col gap-2 bg-linear-to-t from-purple-200 via-violet-400 to-indigo-600 p-4 rounded-md'>
          <h2 className='text-2xl'>Frontend</h2>
          <p>As tecnologias frontend são as que permitem que um website ou aplicação seja interativo e funcional na interface que o usuário vê e com a qual interage.</p>
          <div className='flex gap-3 flex-wrap'>
            {frontend.map((stack, index) => (
              <StackCard key={index} stack={stack} />
            ))}
          </div>
        </div>

        <div className='sm:w-1/2 flex flex-col gap-2 bg-linear-to-t from-lime-200 via-green-400 to-emerald-600 p-4 rounded-md'>
          <h2 className='text-2xl'>Backend</h2>
          <p>Tecnologias backend referem-se às ferramentas, frameworks e linguagens de programação utilizadas para construir a parte do servidor de uma aplicação, ou seja, tudo o que não é visível para o usuário final.</p>
          <div className='flex gap-3 flex-wrap'>
            {backend.map((stack, index) => (
              <StackCard key={index} stack={stack} />
            ))}
          </div>
        </div>

        <div className='sm:w-1/2 flex flex-col gap-2 bg-linear-to-t from-orange-200 via-orange-400 to-orange-600 p-4 rounded-md'>
          <h2 className='text-2xl'>Outros</h2>
          <p>Habilidades complementares que fortalecem o desenvolvimento e a colaboração em projetos, como versionamento com Git e GitHub, design e prototipagem com Figma, além da proficiência em Inglês técnico para compreensão de documentação e comunicação internacional.</p>
          <div className='flex gap-3 flex-wrap'>
            {others.map((stack, index) => (
              <StackCard key={index} stack={stack} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stacks