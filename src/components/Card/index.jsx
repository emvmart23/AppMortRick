import { useContext, useEffect, useState } from "react"
import { CharacterPersonContex } from "../../Counter/context"
import { useNavigate } from "react-router-dom"

const Card = ({data}) => {

  const {info, setInfo} = useContext(CharacterPersonContex)
  const [showIcon, setShowIcon ] = useState(false)

  const navigate = useNavigate()
    
  const handleInfo = () => {
    setInfo(data)
  }


  return (
    <div onClick={handleInfo} className='border border-black inline-block mb-7 p-5 rounded-xl'>
        <figure className='image-style mb-2'>
            <img className='w-full rounded-xl' src={data.image} alt={data.name} />
        </figure>
        <span className='text-blue'>{data.name}</span>
        <button onClick={() => filtered(data.name)}></button>
    </div>
  )
}

export default Card