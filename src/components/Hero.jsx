import React from "react";

const Hero = () => {
  return (
    <div id="home" className="w-full h-[90vh]">
      <img
        src="https://cdn.pixabay.com/photo/2017/04/04/14/24/turtle-2201433_960_720.jpg"
        alt="/"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white">
          <h1 className="font-bold text-4xl text-[var(--primary-dark)]">
            Find Your Special Trip
          </h1>
          <h2 className="text-4xl italic py-4">with CV WeekAway</h2>
          <p>
            Sun and beach, mountain trails, landscapes of a nature that so
            easily springs up everywhere and a wealth of customs and traditions
            that does not translate into any price: Cabo Verde is a paradise
            that rests by the sea.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
