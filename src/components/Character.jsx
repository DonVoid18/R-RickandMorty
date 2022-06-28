import React from "react";

function Character({ character }) {
  return (
    <div className="max-w-max max-h-max hover:scale-[1.15] hover:bg-[#293241] p-[5px] rounded-md ease-out duration-300">
      <img src={character.image} className="rounded-md"/>
      <h3 className="text-[#bfd200] text-center">{character.name}</h3>
    </div>
  );
}

export default Character;
