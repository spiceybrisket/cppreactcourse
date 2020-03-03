import React, { useState } from "react";
import { Heart } from "react-zondicons";

const HeroCard = ({ image, isLiked, name, price, subTitle }) => {
  const [liked, setLiked] = useState(isLiked);
  return (
    <div className="">
      <div className="flex flex-grow w-full w-64 items-center justify-center ">
        <div className="w-full ">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div
              className="bg-cover bg-center h-56 p-4"
              style={{
                backgroundImage: `url(${image})`
              }}
            >
              <button
                className="block justify-end focus:outline-none"
                onClick={() => setLiked(!liked)}
              >
                <Heart
                  className={`h-6 w-6  text-white fill-current ${
                    liked ? "text-red-600" : null
                  } `}
                  size={50}
                />
              </button>
            </div>
            <div className="p-4">
              <p className="uppercase tracking-wide text-sm font-bold text-gray-700">
                {name}
              </p>
              <p className="text-3xl text-gray-900">${price}</p>
              <p className="text-gray-700">{subTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
