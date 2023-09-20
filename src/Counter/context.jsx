import React, { createContext, useState } from 'react'
import GetApi from '../Api'

export const CharacterPersonContex = createContext()

export const CharacterPersonProvider = ({children}) => {
  
  const [searchValue, setSearchValue] = useState('')
  const { character } = GetApi()
  const [info , setInfo ] = useState(null)
  const [dataem, setDataem] = useState(null)


  //search character
  const filtered = character.filter(item => {
    const todoText = item.name.toLocaleLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  })

  //favorite character
  

  
  return (
    <CharacterPersonContex.Provider value={{
        searchValue,
        setSearchValue,
        character,
        setInfo,
        info,
        dataem,
        setDataem,
        filtered
    }}>
        {children}
    </CharacterPersonContex.Provider>
  )
}

export default CharacterPersonProvider