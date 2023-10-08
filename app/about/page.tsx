import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

const about = () => {
  return (
    <main className="relative w-full h-screen border border-color rounded-xl bg-[#011627] ">
      {/* HEADER */}
<div className="absolute left-0 w-full px-4 border-b border-color md:px-14 xl:px-32 2xl:px-60 z-40 "><Navbar /></div>
    
    {/* CONTAINER */}
    <section className='w-full h-full '>
      <div className="pt-[49px] pb-[41px] w-full h-full flex">
        <div className="absolute w-full border-b border-color flex">
          
          
        </div>
        <Sidebar />

      </div>
      
    </section>

 {/* FOOTER */}
 <div className="absolute bottom-0 w-full left-0 px-2 border-t border-color md:px-14 xl:px-32 2xl:px-60 "><Footer /></div>
  </main>
  )
}

export default about
