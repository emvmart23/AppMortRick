import React, { useContext } from 'react'
import { CharacterPersonContex } from '../../Counter/context'

const SearchCharacter = () => {
  const {searchValue, setSearchValue} = useContext(CharacterPersonContex)
  return (
      <input
        className='align-center relative rounded-lg input-style'
        type='text'
        value={searchValue}
        placeholder='Search Character'
        onChange={(e) => {
        setSearchValue(e.target.value)
      }}/>
  )
}

export default SearchCharacter