import React from 'react'
import { useEffect, useState } from 'react'
import TodoList from '../../components/TodoList'
import Card from '../../components/Card'
import SearchCharacter from '../../components/SearchCharacter'

function Home () {

  const [ character, setCharacter ] = useState(null)

  useEffect(() => { 
    fetch('https://rickandmortyapi.com/api/character')
    .then((response)=> response.json())
    .then((data)=>setCharacter(data.results))
    .catch(error => console.log(error))
  }, [])

  
  return (
    <>
      <SearchCharacter/>

      <TodoList>
        {character?.map(item => (
          <Card key={item.id} data={item}/>
        ))}
      </TodoList>

      
    </>
  )
}

export default Home

