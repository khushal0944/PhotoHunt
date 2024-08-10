import React from 'react'

function Logo({className = ""}:{className?: string}) {
  return (
    <div className={`bg-red-700 hover:bg-red-800 text-white font-bold -skew-x-12 p-2 ${className}`}><h1 className='text-lg skew-x-12'>PhotoDekho</h1></div>
  )
}

export default Logo