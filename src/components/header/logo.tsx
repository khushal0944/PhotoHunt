import React from 'react'

function Logo({className = ""}:{className?: string}) {
  return (
    // <Link href={"/"}>
        <img src={"/logo.png"} alt='logo' className={`w-28 pl-2 ${className}`}/>
    // {/* </Link> */}
  )
}

export default Logo