import React, { useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from './ui/card'
import { Separator } from './ui/separator'
import { Copy, CopyCheck, Send } from 'lucide-react'
import Stack from './Stack'
import Image from 'next/image'
import { Button } from './ui/button'
import Repositories from './Repositories'

const stacks = [
  {
    name: 'ReactJS',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'NextJS',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'NodeJS',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Java Spring Boot',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  },
  {
    name: 'JavaScript',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'Figma',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
  {
    name: 'React Native/expo',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Postgresql',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'Bootstrap',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  },
  {
    name: 'Java',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
];


function MainContent() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('joaovictormcalaca@gmail.com')
      setCopied(true)
    } catch (e) {
      console.error(`Error copying email: ${e}`);
      
    }
  }

  return (
    <div className="sm:w-3/4 w-full p-4">
      <main className="w-full flex flex-col rounded-sm border-1 border-zinc-700">
        <section className="p-4">
          <h1 className='text-white text-2xl'>Hello, world! 👋🏽</h1>
          <Separator className='self-center my-4' />
          <h2 className='text-gray-100 text-lg'>Seja bem vindo ao meu portólio!</h2>
        </section>


        <section id='aboutMe' className="p-4">
          <h2 className='text-white text-2xl'>Sobre mim 👨🏽‍💻</h2>
          <Separator className='self-center my-4' />
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col sm:flex-row gap-6'>
              <Image className='w-full sm:max-w-1/3 rounded-md' src='/pixelCharacter.png' width={500} height={500} alt='Character' />

              <p className='text-gray-100 text-lg'>Sou um desenvolvedor Full Stack e Mobile apaixonado por tecnologia. Atualmente cursando Engenharia da Computação no IF Goiano Campus Trindade, também sou técnico em Informática para Internet no mesmo Instituto desde 2024. Participo de projetos de iniciação científica no instituto, ja tendo recebido certificado de Projeto Destaque da Semana Nacional de Ciência e Tecnologia do Instituto Federal. Também ja participei de atividades de monitoria da matéria de lógica de programação, no ano de 2023, ajudando alunos a aprender o conteúdo e tirando dúvidas</p>
            </div>

            <div className='sm:w-1/2 w-full flex flex-col'>
              <div className='text-white flex justify-between px-4 items-center rounded-t-md bg-gray-800'>
                <p>Meu email</p>
                <Button onClick={handleCopy} className='cursor-pointer' size='icon' variant='transparent'> {copied ? <CopyCheck/> : <Copy/> } </Button>
              </div>
              <code className='text-white bg-gray-900 p-4 rounded-b-md'>
                <span className='text-yellow-400'>const </span>
                <span className='text-pink-400'>meuEmail </span>
                <span>= </span>
                <span className='text-blue-300'>&apos;joaovictormcalaca@gmail.com&apos;</span>
              </code>
            </div>
          </div>

          <Button asChild className='bg-cyan-600 hover:bg-cyan-700 flex sm:hidden w-full mt-10'>
            <a href="mailto:joaovictormcalaca@gmail.com?subject=Olá!">Contato <Send /></a>
          </Button>
        </section>

        <section id='stacks' className='p-4 flex flex-col gap-3'>
          <h2 className='text-white text-2xl'>Tecnologias que domino 🧠</h2>

          <Separator className='self-center my-4' />

          <div className='flex flex-wrap gap-2'>
            {stacks.map((stack, index) => (
              <Stack stack={stack} key={index} />
            ))}
          </div>
        </section>

        <section id='repositories' className='p-4'>
          <h2 className='text-white text-2xl'>Meus repositórios no github 💾</h2>

          <Separator className='self-center my-4' />

          <Repositories />
        </section>
      </main>
    </div>
  )
}

export default MainContent