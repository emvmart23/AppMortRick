import React, { useContext} from 'react';
import { CharacterPersonContex } from '../../Counter/context';
import { Layout } from '../../common/components/index';

const Favorite = () => {
  const { addFavorite } = useContext(CharacterPersonContex);

  return (
    <Layout>
      <h1 className='animate-bounce mb-20 text-4xl'>Characters favorites</h1>

      {addFavorite.map((fav) => (
        <aside key={fav.id} className='card-favorite relative border border-black inline-block mt-10 mb-8 p-5 rounded-xl'>
          <figure className='image-style'>
            <img className='rounded-xl mb-5' src={fav.image} alt={fav.name} />
          </figure>
          <span className='text-2xl font-mono'>{fav.name}</span>
        </aside>
      ))}
    </Layout>
  );
};

export default Favorite;
