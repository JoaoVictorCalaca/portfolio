import React from 'react'
import { Avatar } from './ui/avatar'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

function AboutMe() {
  return (
    <div style={{ backgroundImage: 'url("/resource1.png")' }} className='w-full h-screen p-6 flex flex-col items-center gap-4 bg-contain'>
      <h1 className='text-4xl'>Me conheça melhor</h1>

      <div className='indent-6'>
        <p>Sou desenvolvedor Full Stack e Mobile, apaixonado por tecnologia e inovação. Atualmente, curso Engenharia da Computação no IF Goiano Campus Trindade e sou formado como Técnico em Informática para Internet pelo mesmo instituto (2024). Tenho experiência com projetos de iniciação científica, tendo recebido o certificado de Projeto Destaque na Semana Nacional de Ciência e Tecnologia do Instituto Federal. Estou sempre em busca de novos desafios que me permitam aprender, crescer e contribuir com soluções criativas e eficientes.</p>
      </div>
    </div>
  )
}

export default AboutMe