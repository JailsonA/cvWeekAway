import React from "react";

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-gray-700 p-4" >Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1581536678606-3a35fecc8fc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt="/"
          />
        </div>
        <div>
          <img className="w-full h-full object-cover"
            src="https://admin.visit-caboverde.com/uploads/boavista_4_7bdd3d4c25.jpg"
            alt="/"
          />
        </div>
        <div>
          <img className="w-full h-full object-cover"
            src="https://admin.visit-caboverde.com/uploads/fogo_1_222b53fa4b.jpg"
            alt="/"
          />
        </div>
        <div>
          <img className="w-full h-full object-cover"
            src="https://admin.visit-caboverde.com/uploads/santiago_4_f41f52d0e9.jpg"
            alt="/"
          />
        </div>
        <div>
          <img className="w-full h-full object-cover"
            src="https://admin.visit-caboverde.com/uploads/santo_antao_2_21645c5619.jpg"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
