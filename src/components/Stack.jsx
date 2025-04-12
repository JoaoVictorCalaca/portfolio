import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'

function Stack({ stack }) {
  return (
    <Card className='border-1 bg-transparent hover:bg-gray-300 text-gray-300 hover:text-gray-800 hover:scale-110 duration-500 cursor-default'>
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
          <div className="w-12 h-12 bg-zinc-700 rounded" />
        )}
      </CardContent>
    </Card>
  )
}

export default Stack