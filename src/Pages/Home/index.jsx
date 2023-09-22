import React, { useContext } from "react";
import { useEffect, useState } from "react";
import TodoList from "../../components/TodoList";
import Card from "../../components/Card";
import SearchCharacter from "../../components/SearchCharacter";
import { CharacterPersonContex } from "../../Counter/context";
import Layout from "../../components/Layout";

function Home() {
  const { filtered } = useContext(CharacterPersonContex);

  return (
    <Layout>
      <SearchCharacter />

      <TodoList>
        {filtered?.map((item) => (
          <Card key={item.name} data={item} />
        ))}
      </TodoList>
      
    </Layout>
  );
}

export default Home;
