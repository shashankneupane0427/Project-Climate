
import React from 'react'
import Footer from '@/components/Footer'
import PostItem from '@/components/PostItem'
const Blogs = () => {
  return (
    <main style={{
      paddingLeft: '10%',
      paddingRight: '10%'

    }} className="z-0 pb-[40px] pt-[100px] lg:pt-[170px]">
      <div className=' grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center  ' >
        <PostItem  />
      </div>
      <Footer/>
    </main>
  )
}

export default Blogs