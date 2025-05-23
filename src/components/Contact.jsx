import React, { useState } from 'react'
import { Avatar } from './ui/avatar'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { AtSign, Copy, CopyCheck, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'

function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmailToClipboard = async () => {
    await navigator.clipboard.writeText('joaovictormcalaca@gmail.com')
    setCopied(true)
  }

  return (
    <div className='w-full bg-cover p-6 flex flex-col items-center justify-center gap-4'>
      <h1 className='text-4xl'>Contato</h1>

      <div className='flex sm:flex-row flex-col items-center gap-4'>
        <div className='sm:w-1/2 w-full flex justify-center'>
          <Image className='rounded-full w-1/2' src='https://github.com/joaovictorcalaca.png' width={460} height={460} alt='jv' />
        </div>

        <div className='sm:w-1/2 w-full flex flex-col items-center'>
          <ul className='flex flex-col gap-3'>
            <li className='flex items-center gap-2'>
              <AtSign />
              <p>joaovictormcalaca@gmail.com</p>
              <button onClick={copyEmailToClipboard} className='cursor-pointer'>
                {copied ? <CopyCheck className='text-emerald-500' /> : <Copy />}
              </button>
            </li>
            {copied && <p className='text-emerald-500 text-sm'>Email copiado para área de transferência</p>}
            <li className='flex items-center gap-2'>
              <Linkedin />
              <a href='www.linkedin.com/in/joaovictorcalaca' target='_blank'>LinkedIn</a>
            </li>
            <li className='flex items-center gap-2'>
              <Instagram />
              <a href='www.instagram.com/jvcalaca' target='_blank'>Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact