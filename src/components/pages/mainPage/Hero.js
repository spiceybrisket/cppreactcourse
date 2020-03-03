import React from "react";
import Image1 from "../../../assets/img/air-filters.jpg";
import Image2 from "../../../assets/img/JVC002_4-3_S08SSVW6SKHC_900x.jpg";
import Image3 from "../../../assets/img/ngk6_RYEEPROWA0A4_735b01f8-d23a-4f93-aa30-509ce367bec2_800x436.jpg";

import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <div class="hidden md:flex justify-around bg-gray-200">
      {heroData.map(item => (
        <div class="text-gray-700 flex-grow text-center px-4 py-2 m-2">
          <HeroCard
            image={item.image}
            isLiked={item.liked}
            name={item.name}
            price={item.price}
            subTitle={item.subTitle}
          />
        </div>
      ))}
    </div>
  );
};

export default Hero;

const heroData = [
  {
    name: "NGK SPARK PLUG BKR6EP11",
    price: 215.99,
    subTitle: "Included - x6 Spark Plugs",
    image: Image3,
    liked: true
  },
  {
    name: "JVC BLUETOOTH DIGITAL MEDIA RECEIVER",
    image: Image2,
    price: 134.99,
    liked: false,
    subTitle: "Installation size - W182 x H53 x D100mm"
  },
  {
    name: "AIR INTAKE FLEXI PIPE",
    price: 31.99,
    image: Image1,
    subTitle: "Pipe is 3 in diameter",
    liked: true
  }
];
