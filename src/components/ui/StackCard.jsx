import React from 'react'
import { Card, CardContent } from './card'
import Image from 'next/image'

function StackCard({stack}) {
  return (
    <Card className='border-1 w-fit text-gray-800 hover:scale-110 duration-500 cursor-default'>
      <CardContent>
        {stack.iconUrl ? (
          <div className='flex items-center justify-center gap-2'>
            <Image
              src={stack.iconUrl}
              alt={stack.name}
              width={20}
              height={20}
            />
            <p>{stack.name}</p>
          </div>
        ) : (
          <div className='flex items-center justify-center gap-2'>
            <p>{stack.name}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default StackCard