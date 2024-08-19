import React, { useState } from 'react';

const Calendar = ({object}) => {
  return (
    <div className="">
      <div className="relative p-6 w-56 h-60 bg-gradient-to-r from-blue-200 to-purple-300 rounded-3xl shadow-xl shadow-violet-900">
        {/* Rings */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 gap-[4vh] flex justify-center space-x-2">
          <div className="w-6 h-6 border-4 border-blue-500 rounded-full shadow-md"></div>
          <div className="w-6 h-6 border-4 border-blue-500 rounded-full shadow-md"></div>
          <div className="w-6 h-6 border-4 border-blue-500 rounded-full shadow-md"></div>
        </div>
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 gap-[4.55vh] flex justify-center space-x-4 z-10">
          <div className="w-3 h-12 bg-gradient-to-b from-blue-600 to-pink-400 rounded-b-lg rounded-t-lg shadow-lg"></div>
          <div className="w-3 h-12 bg-gradient-to-b from-blue-600 to-pink-400 rounded-t-lg rounded-b-lg shadow-lg"></div>
          <div className="w-3 h-12 bg-gradient-to-b from-blue-600 to-pink-400 rounded-t-lg rounded-b-lg shadow-lg"></div>
        </div>
        <div className="absolute top-1.5 left-1/2 gap-[4vh] transform -translate-x-1/2 flex justify-center space-x-2">
          <div className="w-6 h-6 border-4 rounded-full shadow-md"></div>
          <div className="w-6 h-6 border-4 rounded-full shadow-md"></div>
          <div className="w-6 h-6 border-4 rounded-full shadow-md"></div>
        </div>
        {/* Clouds */}
        <div className="flex flex-col items-center mt-4">
          <div className="text-9xl font-extrabold text-blue-800 drop-shadow-2xl">{object.day}</div>
          <div className="text-3xl font-semibold text-blue-700 uppercase tracking-wider pt-1.5">{object.month}</div>
        </div>
        <div className="absolute -left-7 bottom-10">
          <div className="bg-white w-16 h-10 rounded-full shadow-lg"></div>
          <div className="bg-white w-10 h-6 rounded-full shadow-lg -mt-2 ml-6"></div>
        </div>
        <div className="absolute -right-7 top-14">
          <div className="bg-white w-20 h-12 rounded-full shadow-lg"></div>
          <div className="bg-white w-12 h-8 rounded-full shadow-lg -mt-3 ml-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
