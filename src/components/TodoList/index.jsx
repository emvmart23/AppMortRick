import React from 'react'
import '../../Pages/App/App.css'

const TodoList = ({ children }) => {
  return (
    <div className='container-card'>
        {children}
    </div>
  )
}

export default TodoList