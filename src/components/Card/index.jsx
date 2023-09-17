import React from 'react'

const Card = ({data}) => {
  return (
    <div className='border border-black inline-block mb-10'>
        <figure className='image-style'>
            <img className='w-full rounded-xl' src={data.image} alt={data.name} />
        </figure>
        <span className='text-blue'>{data.name}</span>
    </div>
  )
}

export default Card