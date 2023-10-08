import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const about = () => {
  return (
    <main className="relative w-full h-screen border border-color rounded-xl bg-[#011627] px-4">
      {/* HEADER */}
<div className="absolute left-0 w-full px-4 border-b border-color md:px-14 xl:px-32 2xl:px-60 z-40 "><Navbar /></div>
    
    {/* CONTAINER */}
    <section>
      
    </section>

 {/* FOOTER */}
 <div className="absolute bottom-0 w-full left-0 px-2 border-t border-color md:px-14 xl:px-32 2xl:px-60 "><Footer /></div>
  </main>
  )
}

export default about
