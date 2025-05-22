import React from 'react'
import StackCard from './StackCard'

function StackContainer({ gradient, title, description, icon, stacks }) {
  return (
    <div className={`sm:w-1/2 flex flex-col gap-2 bg-linear-to-t ${gradient} p-4 rounded-md`}>
      <h2 className='text-2xl'> {icon} {title}</h2>
      <p>{description}</p>
      <div className='flex gap-3 flex-wrap'>
        {stacks.map((stack, index) => (
          <StackCard key={index} stack={stack} />
        ))}
      </div>
    </div>
  )
}

export default StackContainer