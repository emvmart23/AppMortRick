import React from 'react'
import '../../Pages/App/App.css'

const ListCharacter = ({ children }) => {
  return (
    <div className='container-card p-4 mb-6'>
        {children}
    </div>
  )
}

export default ListCharacter