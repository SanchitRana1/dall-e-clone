import React, { useState } from "react";
import { downloadImage } from "../utils/getRandomPrompts";
import { download } from "../assets";
import Loader from "./Loader";

const Card = ({ _id, name, prompt, photo }) => {
  const [loading, setLoading] = useState(false);
  const onImgDownload = async () => {
    setLoading(true)
    await downloadImage(_id, photo);
    setLoading(false)
  };
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img
        className="w-full h-full object-cover rounded-xl"
        src={photo}
        alt={prompt}
      />
      {loading && (
        <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]">
          <Loader />
              <img
              className="w-10 h-10 object-contain invert"
              src={download}
              alt=""
            />  
        </div>
      )}
      <div className="group-hover:flex flex-col max-h-[94.5%]  absolute hidden bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md xs:text-xs md:text-md">
        <p className="text-white text-md">{prompt}</p>
        <div className="mt-3 flex justify-between items-center gap-2 text-white">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full justify-center bg-green-700 flex items-center text-md font-bold">
              {name[0]}
            </div>
            <p className="text-sm">{name}</p>
          </div>
          <button
            type="button"
            onClick={onImgDownload}
            className="outline-none bg-transparent border-none"
          >
            <img
              className="w-6 h-6 object-contain invert"
              src={download}
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
