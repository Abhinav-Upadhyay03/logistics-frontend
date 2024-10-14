import React from 'react'

const FullScreenLoader = () => {
  return (
    <div className='fixed top-0 left-0 h-[100vh] w-[100vw] z-99999999 bg-slate-100 opacity-70 flex items-center justify-center'>
        <img
            src='/assets/gifs/loader.gif'
            className='h-14 w-14 sm:h-18 sm:w-18'
        />
    </div>
  )
}

export default FullScreenLoader