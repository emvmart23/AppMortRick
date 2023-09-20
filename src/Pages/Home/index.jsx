import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import TodoList from '../../components/TodoList'
import Card from '../../components/Card'
import SearchCharacter from '../../components/SearchCharacter'
import { CharacterPersonContex } from '../../Counter/context'
import MainPage from '../../components/MainPage'

function Home () {

  const {  filtered } = useContext(CharacterPersonContex)

  return (
    <MainPage>
      
      <SearchCharacter/>

      <TodoList>

        {filtered.map(item => (
          <Card 
            key={item.name} 
            data={item}
            />
        ))}

      </TodoList>
        
      
    </MainPage>
  )
}

export default Home

