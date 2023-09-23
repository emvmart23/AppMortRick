import { useContext, useState } from 'react';
import { CharacterPersonContex } from '../../Counter/context';
import { useNavigate } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid'


const Card = ({ data }) => {
  const { setSelectedCharacter, setAddFavorite, addFavorite, setOpenMenu } = useContext(
    CharacterPersonContex
  );

  const navigate = useNavigate();

  const handleinfoCharacter = (content) => {
    setSelectedCharacter(content);
    navigate('/info');
    setOpenMenu(false)
  };

  const favoritePerson = (event, character) => {
    event.stopPropagation();
    setAddFavorite([...addFavorite, character]);
  };

  const renderIcon = (id) => {
    const isInFavorite = addFavorite.filter((item) => item.id === id).length > 0;

    return isInFavorite ? (
      <button  onClick={(event) => favoritePerson(event, data)}>
        <StarIcon className='text-[#d19540] w-8 h-8'/>
      </button>
    ) : (
      <button  onClick={(event) => favoritePerson(event, data)}>
        <StarIcon className='text-[#e4d7c5] w-8 h-8 '/>
      </button>
    );
  };


  return (
    <div
      onClick={() => handleinfoCharacter(data)}
      className='hover:scale-110 relative border border-black inline-block p-5 mb-10 rounded-xl img-card'
    >
      <figure className='image-style'>
        <img className='w-full rounded-xl size-image' src={data.image} alt={data.name} />
      </figure>
      <div className='text-xl flex justify-between mt-4'>
        <span>{data.name}</span>
        {renderIcon(data.id)}
      </div>
    </div>
  );
};

export default Card;
