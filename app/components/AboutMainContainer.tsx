import React from 'react'

const AboutMainContainer = () => {
  return (
    <main>
         {/* RIGHT SIDE */}
      <section className="flex-[80%] md:flex">
        {/* LEFT SPLIT */}
        <div className="flex-[50%] ">left split</div>

         {/* RIGHT SPLIT */}
         <div className="flex-[50%] ">right split</div>
      </section>
    </main>
  )
}

export default AboutMainContainer
