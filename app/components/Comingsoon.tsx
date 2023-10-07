'use client'

import React from 'react'
import { useState } from 'react'

const Comingsoon = () => {
    const [items, setItems] = useState([
        
    ])

  return (
    <div className="bg-gray-800 rounded-xl w-[400px] h-[175px] md:w-[250px] md:h-[250px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[500px]">
    <p className='text-4xl text-gray-300 flex items-center justify-center h-full'>coming soon</p>
    </div>
  )
}

export default Comingsoon

