import React, { createContext, useState } from 'react'
import GetApi from '../Api'

export const CharacterPersonContex = createContext()

export const CharacterPersonProvider = ({children}) => {
  
  const [searchValue, setSearchValue] = useState('')
  const { character } = GetApi()
  const [selectedCharacter , setSelectedCharacter ] = useState(null)
  const [ addFavorite, setAddFavorite ] = useState([])

  //search character
  const filtered = character.filter(item => {
    const todoText = item.name.toLocaleLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  })

  return (
    <CharacterPersonContex.Provider value={{
        searchValue,
        setSearchValue,
        character,
        setSelectedCharacter,
        selectedCharacter,
        filtered,
        addFavorite,
        setAddFavorite,

    }}>
        {children}
    </CharacterPersonContex.Provider>
  )
}

export default CharacterPersonProvider