import React, { useContext } from 'react';
import { CharacterPersonContex } from '../../Counter/context';
import { Layout, ListCharacter } from '../../common/components/index'
import { Card, SearchCharacter } from '../../components/index';

function Home() {
  
  const { filtered } = useContext(CharacterPersonContex);

  return (
    <Layout>
      <SearchCharacter />

      <ListCharacter>
        {filtered?.map((item) => (
          <Card key={item.name} data={item} />
        ))}
      </ListCharacter>

    </Layout>
  );
}

export default Home;
