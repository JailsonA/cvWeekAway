import React from "react";

const Activities = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div className="relative p-4 ">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-2xl text-white">
          BEACH
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src="https://cdn.pixabay.com/photo/2017/06/17/18/35/beach-2413081_960_720.jpg"
          alt="/"
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-2xl text-white">
          NATURE
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src="https://cdn.pixabay.com/photo/2017/05/31/18/38/sea-2361247_960_720.jpg"
          alt="/"
        />
      </div>
      <div className="relative p-4 ">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-2xl text-white">
          CULTURE
        </h3>
        <img
          className="w-[950px] h-full object-cover relative border-4 border-white shadow-lg"
          src="https://assets.serenity.co.uk/53000-53999/53228/1296x864.jpg"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Activities;
