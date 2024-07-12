import React from "react";
import { downloadImage } from "../utils/getRandomPrompts";
import { download } from "../assets";

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img
        className="w-full h-full object-cover rounded-xl"
        src={photo}
        alt={prompt}
      />
      <div className="group-hover:flex flex-col max-h-[94.5%]  absolute hidden bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md xs:text-xs md:text-md">
        <p className="text-white text-md">{prompt}</p>
        <div className="mt-3 flex justify-between items-center gap-2 text-white">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full justify-center bg-green-700 flex items-center text-md font-bold">
              {name[0]}
            </div>
            <p className="text-sm">{name}</p>
          </div>
          <button type="button" onClick={()=>{downloadImage(_id,photo)}} className="outline-none bg-transparent border-none">
            <img className="w-6 h-6 object-contain invert" src={download} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
