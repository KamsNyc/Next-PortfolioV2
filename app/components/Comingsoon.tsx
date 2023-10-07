'use client'

import React from 'react'
import { useState } from 'react'

const Comingsoon = () => {
    const [items, setItems] = useState([
        
    ])

  return (
    <div className="bg-gray-800 rounded-xl w-[400px] h-[175px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]">
    <p className='text-4xl text-gray-300 flex items-center justify-center h-full'>coming soon</p>
    </div>
  )
}

export default Comingsoon

