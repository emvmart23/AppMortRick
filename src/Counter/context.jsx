import React, { createContext, useState } from 'react'

export const CharacterPersonContex = createContext()

export const CharacterPersonProvider = ({children}) => {
  
  const [searchValue, setSearchValue] = useState('')
  
  return (
    <CharacterPersonContex.Provider value={{
        searchValue,
        setSearchValue,
    }}>
        {children}
    </CharacterPersonContex.Provider>
  )
}

export default CharacterPersonProvider