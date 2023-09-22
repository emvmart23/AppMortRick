import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='flex-col justify-center items-center w-[80%] mx-auto text-center'>
        {children}
    </div>
  )
}

export default Layout