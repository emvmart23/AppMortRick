import { useEffect, useState } from "react";

const GetApi = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacter(data.results))
      .catch((error) => console.log(error));
  }, []);

  return { character };
};

export default GetApi;
