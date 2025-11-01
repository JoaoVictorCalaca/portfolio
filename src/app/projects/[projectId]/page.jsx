'use client'
import { useEffect, useRef, useState } from 'react'
import { notFound, useParams } from "next/navigation"
import { projects } from '@/lib/projects'
import {
  ButtonGroup,
} from "@/components/ui/button-group"
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Copy, ExternalLink, Eye, EyeClosed, Share2, Undo2 } from 'lucide-react'
import JSConfetti from 'js-confetti'
import Link from 'next/link'


function page() {
  const params = useParams()
  const projectId = params.projectId
  const [copied, setCopied] = useState(false)
  const [shared, setShared] = useState(false)
  const [visible, setVisible] = useState(true)

  const jsConfettiRef = useRef(null);

  useEffect(() => {
    jsConfettiRef.current = new JSConfetti();
  }, [])

  const project = projects.find(proj => proj.id == projectId)

  if (!project) {
    return notFound()
  }

  const copyEmailToClipboard = async () => {
    await navigator.clipboard.writeText(project.link)
    setCopied(true)

    jsConfettiRef.current?.addConfetti({
      emojis: ['😎', '✅',],
      confettiNumber: 5
    })
  }

  const sharePage = async () => {
    await navigator.share({
      title: project.name,
      text: project.description,
      url: project.link,
    })
    setShared(true)

    jsConfettiRef.current?.addConfetti({
      emojis: ['😁', '✅',],
      confettiNumber: 5
    })
  }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div className='w-full min-h-screen'>
      <header className='w-full p-4 bg-black flex items-center justify-center'>
        <ButtonGroup>
          <Button>
            <a href='/#projects'> <Undo2 /> </a>
          </Button>
          <Button>
            <a href={project.link}> <ExternalLink /> </a>
          </Button>
          <Button onClick={sharePage}>
            <Share2 color={shared ? 'oklch(59.6% 0.145 163.225)' : '#fff'} />
          </Button>
          <Button onClick={copyEmailToClipboard}>
            <Copy color={copied ? 'oklch(59.6% 0.145 163.225)' : '#fff'} />
          </Button>
        </ButtonGroup>
      </header>

      <main className='w-full p-6 flex flex-col gap-8'>
        <div className='absolute right-6 top-24'>
          <Button onClick={toggleVisibility} variant='secondary'> {visible ? <Eye /> : <EyeClosed />} </Button>
        </div>

        <div className='w-full h-full rounded-lg'>
          <div className='flex flex-col gap-4 mb-6'>
            <h1 className='text-5xl font-bold'>{project.title}</h1>
            <p className='w-4/5'>{project.longDescription}</p>
          </div>

          <iframe
            className='w-full h-[80vh] rounded-lg'
            src={project.link}
            style={{ display: visible ? 'block' : 'none' }}
          />

          <div
            className='w-full h-[80vh] rounded-lg'
            style={{ display: visible ? 'none' : 'block' }}
          />
        </div>
      </main>
    </div>
  )
}

export default page