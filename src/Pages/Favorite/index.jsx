import React, { useContext} from 'react';
import { CharacterPersonContex } from '../../Counter/context';
import { Layout } from '../../components/index';

const Favorite = () => {
  const { addFavorite } = useContext(CharacterPersonContex);

  return (
    <Layout>
      <h1 className='mb-10 '>Characters favorites</h1>

      {addFavorite.map((item) => (
        <aside key={item.id} className='border border-black inline-block mb-8 p-5 rounded-xl'>
          <figure className='image-style'>
            <img className='rounded-xl' src={item.image} alt={item.name} />
          </figure>
          <span>{item.name}</span>
        </aside>
      ))}
    </Layout>
  );
};

export default Favorite;
