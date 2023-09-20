import React, { useContext, useEffect, useState } from 'react'
import { CharacterPersonContex } from '../../Counter/context'


const InfoPerson = () => {

  const { info } = useContext(CharacterPersonContex)
 
  console.log(info.name)
  
  return (
    <div className='text-white'>{info.name}</div>
  )
}

export default InfoPerson