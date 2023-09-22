import React, { useContext, useEffect, useState } from "react";
import { CharacterPersonContex } from "../../Counter/context";
import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";

const InfoPerson = () => {
  const { selectedCharacter } = useContext(CharacterPersonContex);
  // siempre cuando estes pasando datos siempre
  //utiliza el ? porque no sabes si los datos estan llegando
  const navigate = useNavigate()
  const PageRetorn = () => navigate('/')

  return (
    <Layout>
      <button  className='absolute top-20' onClick={() => PageRetorn()}>REGRESAR</button>

      <div className='style-card p-6 inline-block bg-neutral-100/10 rounded-xl'>
        <figure className="image-style mb-2">
            <img
              className="w-full rounded-xl"
              src={selectedCharacter?.image}
              alt={selectedCharacter?.name}
            />
          </figure>
          <p className="mt-8 mb-4 text-start ml-2">
            <span className="text-xl block ">
              Name : {selectedCharacter?.name}
            </span>
            <span className="text-xl block ">
              Status : {selectedCharacter?.status}
            </span>
            <span className="text-xl block ">
              Species : {selectedCharacter?.species}
            </span>
          </p>
      </div>
    </Layout>
  );
};

export default InfoPerson;
