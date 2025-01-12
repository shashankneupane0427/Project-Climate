import React from 'react'

const Card = ({name,url,description,post}) => {
  return (
    <main>
        <div style={{
          height:"350px",
          width:'350px',
          

        }} className='flex flex-col'>
            <div className='h-full w-full flex justify-center items-center ' >
              
              <img src={url} alt="" className='h-32 w-32 rounded-full object-cover ' />
            </div>
            < div className='text-center'>
              <span className='text-center border-b-2 border-green-400 '>
                {name}

              </span>
              <h1 className='text-center text-gray-500' >{post}</h1>
              <h1 className='text-center' >{description}</h1>
            </div>
        </div>
    </main>
  )
}

export default Card