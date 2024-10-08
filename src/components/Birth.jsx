import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import Card from './Card';
import { TiArrowSortedDown } from "react-icons/ti";
import '../App.css';
import Calendar from './Calender';
import { GiSoundOff } from "react-icons/gi";
import { GiSoundOn } from "react-icons/gi";

const Birth = ({ object }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [audio] = useState(new Audio('theuned_happy-birthday-crowd(chosic.com).mp3'));
  const hbd = document.querySelector('#ch');
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      audio.play();
    }
  }, [isModalOpen, audio]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    audio.pause();
    audio.currentTime = 0;
  };

  const [countdown, setCountdown] = useState(3);
  const [showCountdown, setShowCountdown] = useState(true);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
        document.querySelector('.countdown').style = ''
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowCountdown(false);
    }
  }, [countdown]);

  const togglePlayPause = () => {
    const audio = document.querySelector('#ch');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };



  return (
    <>
      <div></div>
      <div className={`countdown absolute h-screen w-screen bg-black text-[10rem] text-white z-50 flex justify-center items-center ${showCountdown ? 'translate-y-0' : '-translate-y-[100%]'} transition-transform duration-1000 ease-in-out`}>
        {countdown > 0 ? <h1 className='flex justify-center items-center h-screen bg-gradient-to-br from-pink-600 to-purple-500 bg-clip-text text-transparent'>{countdown}</h1> : <h1 className='flex justify-center h-screen items-center bg-gradient-to-br from-pink-600 to-purple-500 bg-clip-text text-transparent'>Yayyy!</h1>}
      </div>

      {!showCountdown && (
        <audio id='ch' autoPlay controlsList='pause' loop>
          <source src="/hbd.mp3" />
        </audio>
      )}

      <button onClick={togglePlayPause} className="absolute top-3 left-3 bg-white text-pink-500 text-2xl font-bold px-2 py-2 rounded-full z-40">
        {isPlaying ? <GiSoundOn /> : <GiSoundOff />}
      </button>

      <div className='w-[33%] absolute top-[50%] left-10'>
        <span className='absolute -top-[80%] left-[60%] text-8xl drop-shadow-xl shadow-black uppercase font-bold bg-gradient-to-r from-red-500 via-pink-500 to-pink-400 bg-clip-text text-transparent tracking-tight'>It's</span><span className='absolute -top-[76%] left-[93%] text-7xl drop-shadow-2xl shadow-black'>👉</span>
        <h1 className='text-8xl flex flex-col drop-shadow-xl shadow-black uppercase font-bold bg-gradient-to-r from-red-500 via-pink-500 to-pink-400 bg-clip-text text-transparent'>
          <span className='text-[9rem]'>Happy</span>
          <span>Birthday!</span>
        </h1>
        <p className='text-xl text-white font-semibold py-4 px-1' style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)' }}>Celebration... Let's party, yayyyy!!!</p>
      </div>
      <div className='flex flex-col absolute top-[53%] left-[38%] h-max'>
        <button onClick={handleOpenModal} className='border-1 shadow-lg shadow-purple-700 rounded-full bg-pink-600 text-white px-6 py-2 font-bold mt-4 w-32 mx-8 duration-500 animate-bounce z-10'>Surprise!!!</button>
        <h1 className='text-3xl text-pink-600 mx-20 animate-bounce duration-1000'><TiArrowSortedDown /></h1>
        <button onClick={handleOpenModal} className='hover:scale-105 -translate-x-3 duration-500 z-10'><img src="gift4box-removebg-preview.png" style={{ height: '30vh' }} alt="" /></button>
      </div>

      {isModalOpen && (
        <>
          <div className='absolute z-50'>
            <Confetti
              width={width}
              height={height}
              numberOfPieces={3000}
              recycle={false}
              initialVelocityX={Math.random() * 60}
              initialVelocityY={Math.random() * 60}
              initialX={0}
              initialY={0}
              gravity={0.3}
              wind={0.005}
            />

            <Confetti
              width={width}
              height={height}
              numberOfPieces={3000}
              recycle={false}
              initialVelocityX={-(Math.random() * 60)}
              initialVelocityY={Math.random() * 60}
              initialX={width}
              initialY={0}
              gravity={0.3}
              wind={0.005}
              className='absolute z-50'
            />
          </div>
          <Card handleCloseModal={handleCloseModal} object={object} />
        </>

      )}

      <div>
        <div className='absolute right-[11%] top-[42%] h-[60%] z-10'>
          <img src="cake1-removebg-preview-removebg-preview.png" className='h-[60%]' alt="image unavailable"></img>
          <img src="candleflame-removebg-preview.png" className='absolute -top-[20%] h-24 right-[28.5%] animate-candleMove' alt=""></img>
        </div>
        <div className='absolute left-[42%] top-[8%] h-[75%] '>
          <Calendar object={object} />
        </div>
        <img src='gift2-removebg-preview.png' className='absolute -top-[39%] right-0 h-[65%]'></img>
        <img src='gift2-removebg-preview.png' className='absolute -top-[25%] left-0 h-[65%] scale-x-[-1]'></img>
        <img src='cloud (1).png' className='absolute top-16 left-36 h-16 z-20' style={{ animation: 'cloudMove 80s linear infinite' }}></img>
        <img src='cloud (1).png' className='absolute top-20 right-[40%] h-24 z-20' style={{ animation: 'cloudMove 85s linear infinite' }}></img>
        <img src='cloud (1).png' className='absolute top-12 left-80 h-16 z-20' style={{ animation: 'cloudMove 77s linear infinite' }}></img>
        <img src='cloud (1).png' className='absolute top-12 left-[60%] h-16 z-20' style={{ animation: 'cloudMove 73s linear infinite' }}></img>
        <img src='cloud (1).png' className='absolute top-8 right-[99%] h-12 z-20' style={{ animation: 'cloudMove 85s linear infinite' }}></img>
        <img src='cloud (1).png' className='absolute top-20 left-[10%] h-28 z-20' style={{ animation: 'cloudMove 67s linear infinite' }}></img>
        <img src='cloud (1).png' className='absolute top-24 right-72 h-20 z-20' style={{ animation: 'cloudMove 82s linear infinite' }}></img>
        <img src='loveballoons-removebg-preview.png' className='absolute z-20 top-12 right-[10%] h-32' style={{ animation: 'cloudMove 75s linear infinite' }}></img>
        <img src='loveballoons-removebg-preview.png' className='absolute z-20 top-14 left-[60%] h-32' style={{ animation: 'cloudMove 82s linear infinite' }}></img>
        <img src='loveballoons-removebg-preview.png' className='absolute z-20 top-14 left-[10%] h-32' style={{ animation: 'cloudMove 83s linear infinite' }}></img>
      </div>
      <div>
        <h1 className='text-[13rem] text-transparent bg-gradient-to-r from-pink-300 via-pink-200 w-[43%] drop-shadow-xl shadow-black bg-clip-text font-bold absolute -bottom-12 right-0 tracking-widest'>CAKE</h1>
      </div>

    </>
  );
};

export default Birth;
