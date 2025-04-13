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
import { ScrollArea } from './ui/scroll-area'
import { toast } from 'sonner'
import { stacks } from '@/lib/stacks'

function MainContent() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('joaovictormcalaca@gmail.com')
      setCopied(true)
      toast.success('Email copiado para área de transferência!')
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
            <div className='flex flex-col md:flex-row gap-6'>
              <Image className='w-full h-full sm:max-w-1/3 rounded-md' src='/pixelCharacter.png' width={500} height={500} alt='Character' />

              <p className='text-gray-100 text-lg'>{`Sou desenvolvedor Full Stack e Mobile, apaixonado por tecnologia e inovação. Atualmente, curso Engenharia da Computação no IF Goiano Campus Trindade e sou formado como Técnico em Informática para Internet pelo mesmo instituto (2024).

                Tenho experiência com projetos de iniciação científica, tendo recebido o certificado de Projeto Destaque na Semana Nacional de Ciência e Tecnologia do Instituto Federal.

                Em 2023, atuei como monitor na disciplina de Lógica de Programação, auxiliando colegas no entendimento de conceitos fundamentais e na resolução de dúvidas.

                Estou sempre em busca de novos desafios que me permitam aprender, crescer e contribuir com soluções criativas e eficientes.`}</p>
            </div>

            <div className='sm:w-1/2 w-full flex flex-col'>
              <div className='text-white flex justify-between px-4 items-center rounded-t-md bg-gray-800'>
                <p>Meu email</p>
                <Button onClick={handleCopy} className={`cursor-pointer ${copied ? 'text-green-400' : 'text-white'}`} size='icon' variant='transparent'> {copied ? <CopyCheck /> : <Copy />} </Button>
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

          <ScrollArea className='w-full h-[400]'>
            <Repositories />
          </ScrollArea>
        </section>

        <section className='p-4'>

        </section>
      </main>
    </div>
  )
}

export default MainContent