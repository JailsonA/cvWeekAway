import React from "react";

const Booking = () => {
  return (
    <div id="booking" className="max-w-[1140px] m-auto w-full p-4">
      <form className="lg:flex lg:justify-between w-full items-center">
        <div className="flex flex-col my-2 py-2">
          <label>Destination</label>
          <select name="" id="" className="lg:w-[300px] md:w-full border rounded-md p-2" >
            <option value="">São Vicente</option>
            <option value="">São Nicolau</option>
            <option value="">Santa Luzia</option>
          </select>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-full lg:w-[250px] my-2 p-2">
            <label>Check -IN</label>
            <input type="date" name="" id="" className="border rounded-md p-2" />
          </div>
          <div className="flex flex-col w-full lg:w-[250px] my-2 p-2">
            <label>Check -out</label>
            <input type="date" name="" id="" className="border rounded-md p-2" />
          </div>
        </div>
        <div className="flex flex-col my-2 p-2 w-full">
            <label>Search</label>
            <button className="w-full">Rates & Availabilites</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
