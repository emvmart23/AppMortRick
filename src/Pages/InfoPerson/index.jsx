import React, { useContext } from 'react';
import { CharacterPersonContex } from '../../Counter/context';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Layout } from '../../common/components/index';

const InfoPerson = () => {
  const { selectedCharacter } = useContext(CharacterPersonContex);
  const navigate = useNavigate();
  const PageRetorn = () => navigate('/');

  return (
    <Layout>
      <button className='absolute top-22' onClick={() => PageRetorn()}>
        <ChevronLeftIcon className='text-[#C9C9C9] w-10 h-10'/>
      </button>

      <div className='info-container p-6 inline-block bg-neutral-100/10 rounded-xl'>
        <figure className="image-style mb-2">
          <img
            className='w-full rounded-xl'
            src={selectedCharacter?.image}
            alt={selectedCharacter?.name}
          />
        </figure>
        <p className='mt-8 mb-4 text-start ml-2 font-mono'>
          <span className='text-xl block'>
            Name : {selectedCharacter?.name}
          </span>
          <span className='text-xl block'>
            Status : {selectedCharacter?.status}
          </span>
          <span className='text-xl block'>
            Species : {selectedCharacter?.species}
          </span>
          <span className='text-xl block'>
            Origin : {selectedCharacter?.origin.name}
          </span>
        </p>
      </div>
    </Layout>
  );
};

export default InfoPerson;
