import React from 'react'

const Layout = ({children}) => {
  return (
    <main className='w-[80%] mx-auto text-center'>
        {children}
    </main>
  )
}

export default Layout