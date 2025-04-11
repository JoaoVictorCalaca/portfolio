import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'

function Stack({ stack }) {
  return (
    <Card className='border-1 bg-transparent'>
      <CardContent>
        {stack.iconUrl ? (
          <div className='flex items-center justify-center gap-2'>
            <Image
              src={stack.iconUrl}
              alt={stack.name}
              width={20}
              height={20}
            />
            <p className='text-white'>{stack.name}</p>
            </div>
        ) : (
          <div className="w-12 h-12 bg-zinc-700 rounded" />
        )}
      </CardContent>
    </Card>
  )
}

export default Stack