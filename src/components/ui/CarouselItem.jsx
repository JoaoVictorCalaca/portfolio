import React from 'react'
import { SwiperSlide } from 'swiper/react'

function CarouselItem({ project }) {
  return (
    <div href={project.link} target="_blank" rel="noopener noreferrer">
      <div className='flex flex-col gap-4'>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-md"
        />
        <div className='flex flex-col gap-4'>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="text-gray-300">{project.description}</p>
          <p className='text-emerald-400'>{project.stacks}</p>
          <a target='_blank' href={project.link} className='bg-cyan-600 p-4 rounded-md w-fit hover:bg-white hover:text-cyan-600 transition duration-300'>Acessar</a>
        </div>
      </div>
    </div>
  )
}

export default CarouselItem