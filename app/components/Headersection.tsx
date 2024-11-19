import React from 'react'

function Headersection({children}: {children: React.ReactNode}) {
  return (
    <h2 className='text-2xl font-medium capitalize mb-6'>{children}</h2>
  )
}

export default Headersection