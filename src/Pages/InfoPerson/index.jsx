import React, { useContext } from "react";
import { CharacterPersonContex } from "../../Counter/context";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Layout } from "../../common/components/index";

const InfoPerson = () => {
  const { selectedCharacter } = useContext(CharacterPersonContex);
  const navigate = useNavigate();
  const PageRetorn = () => navigate("/");

  return (
    <Layout>
      <button
        className="relative right-[50rem] bg-slate-800 rounded-full p-3 hover:scale-110"
        onClick={() => PageRetorn()}
      >
        <ChevronLeftIcon className="text-[#C9C9C9] w-10 h-10" />
      </button>

      <div className="flex gap-10 w-[55%] h-[45rem] p-6 bg-neutral-100/10 rounded-xl mx-auto">
        <img
          className=" rounded-xl"
          src={selectedCharacter?.image}
          alt={selectedCharacter?.name}
        />

        <p className="text-[2rem] text-start font-mono relative top-[12rem] mx-auto">
          <span className="mb-4 block">Name : {selectedCharacter?.name}</span>
          <span className="mb-4 block">Status : {selectedCharacter?.status}</span>
          <span className="mb-4 block">Species : {selectedCharacter?.species}</span>
          <span className="mb-4 block">
            Origin : {selectedCharacter?.origin.name}
          </span>
        </p>
      </div>
    </Layout>
  );
};

export default InfoPerson;
