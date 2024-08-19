import React, { useEffect, useState } from 'react';
import { BsStars } from "react-icons/bs";
import Confetti from 'react-confetti';

const Card = ({ handleCloseModal, object }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex relative items-center justify-center p-4 inset-0 h-screen bg-black bg-opacity-50 z-30">
      <div 
        className={`relative bg-gray-100 shadow-lg rounded-xl h-[75vh] w-full max-w-lg p-6 text-center overflow-hidden z-10 transform transition-transform duration-500 ${isMounted ? 'scale-100' : 'scale-0'}`}
      >
        <img src='happy-removebg-preview (1).png' className='relative -translate-y-14 scale-90 z-20' alt="Happy Birthday" />
        <img src='bulb-removebg-preview.png' className='-translate-y-[90%] translate-x-[62%] rotate-[37deg]' alt="Decoration" />
        <img src="bulb-removebg-preview.png" className='-translate-y-[190%] -translate-x-[71%] -rotate-[27deg]' alt="Decoration" />
        <div className="absolute top-[40%] mx-12 font-handwritten z-20">
          <h1 className="text-3xl font-bold text-red-500">
            Happy Birthday, <span className='uppercase'>{object.name} </span>
            {object.message}
            {/* Tujhe kya laga mai bhool jaunga yeh din. Yaar, mujhe sab yaad tha, aur sun aaj mere bhai ka birthday hai party toh banti hai! Toh shaam ko nikalke sab milke full-on masti maarke ayenge! Once again Happy Birthday mere dost! */}
          </h1>
        </div>
        <div className="absolute inset-0 grid grid-cols-5 grid-rows-8 p-2 overflow-hidden">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className={`text-yellow-400 text-xl`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              <BsStars />
            </div>
          ))}
        </div>
        <button onClick={handleCloseModal} className='absolute bottom-5 left-[43%] border bg-red-400 px-4 py-2 rounded-full text-white font-semibold'>
          Close
        </button>
      </div>
    </div>
  );
};

export default Card;
