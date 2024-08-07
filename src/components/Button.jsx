import React from 'react'

function Button({children, className, onClick}) {
  return (
   <button className={`py-2 px-8 rounded text-white ${className}`} onClick={onClick}>{children}</button>
  )
}

export default Button
