import React, { useContext } from "react";
import { CharacterPersonContex } from "../../Counter/context";
import {
  Card,
  SearchCharacter,
  Layout,
  ListCharacter,
} from "../../components/index";

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
