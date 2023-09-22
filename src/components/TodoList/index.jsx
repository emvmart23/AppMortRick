import React from 'react'
import '../../Pages/App/App.css'

const TodoList = ({ children }) => {
  return (
    <div className='container-card p-4 mb-6 mx-auto'>
        {children}
    </div>
  )
}

export default TodoList