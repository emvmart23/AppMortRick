import React from 'react'

const MainPage = ({children}) => {
  return (
    <main className=' flex-col justify-center items-center w-[80%] mx-auto'>
        {children}
    </main>
  )
}

export default MainPage