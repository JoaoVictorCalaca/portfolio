import { Download, Instagram, Linkedin, MapPin, Send } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

function Sidebar() {
  return (
    <div className="flex flex-col sm:w-1/4 w-full p-4 gap-4">
      <div className="flex sm:flex-col  gap-4">
        <Avatar className='w-100% h-100% min-h-[8rem] min-w-[8rem]'>
          <AvatarImage src="https://github.com/joaovictorcalaca.png" alt="@jvcalaca" />
          <AvatarFallback>Jv</AvatarFallback>
        </Avatar>

        <div>
          <h1 className="text-gray-100 text-2xl font-bold">João Víctor</h1>
          <h2 className="text-gray-100">Técnico em informática para Internet e graduando em Eng. da Computação no <a className='underline' href='https://ifgoiano.edu.br/home/index.php/cursos-superiores-trindade/10712-engenharia-da-computacao.html' target='_blank'>IF Goiano</a></h2>
        </div>
      </div>

      <Button asChild className='bg-cyan-600 hover:bg-cyan-700 animate-bounce'>
        <a href="mailto:joaovictormcalaca@gmail.com?subject=Olá!">Contato <Send /></a>
      </Button>

      <Button asChild className='bg-cyan-600 hover:bg-cyan-700'>
        <a href="curriculo.pdf" target='_blank'>Baixar currículo <Download /></a>
      </Button>

      <div className="flex flex-col gap-4">
        <div className="text-white flex gap-2 items-center">
          <MapPin />
          <p>Trindade, GO</p>
        </div>

        <div className="text-white flex gap-2 items-center">
          <Instagram />
          <a href='https://instagram.com/jv_calaca' target="_blank">@jv_calaca</a>
        </div>

        <div className="text-white flex gap-2 items-center">
          <Linkedin />
          <a href='https://linkedin.com/in/joaovictorcalaca' target="_blank">@joaovictorcalaca</a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar