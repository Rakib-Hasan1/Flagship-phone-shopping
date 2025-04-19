import React, { useState } from "react";
import heroImage from "../assets/banner.png";
import Button from "./UI/usableButton";

const Hero = ({handleSearch}) => {
  const [searchText, setSearchText] = useState("");


  return (
    <div>
      <img src={heroImage} className="pt-16 w-full md:max-w-md mx-auto" />
      <div>
        <h1 className="font-thin text-7xl text-gray-900 text-center">
          Browse, Search, View, Buy
        </h1>
        <p className="text-gray-600 text-center pt-3">
          Best place to browse, search, view details and purchase of top
          flagship phones <br />
          of the current time - Flagship Face Off
        </p>
        <form onSubmit={(e)=>{
          handleSearch(e, searchText)
          setSearchText("")
        }} className="flex flex-col md:flex-row items-center justify-center mb-4 md:px-24 mt-3">
          <input value={searchText} onChange={e=>setSearchText(e.target.value)}
            type="text"
            placeholder="Search Phone by Name"
            className="w-2/3 p-3 shadow-md border border-gray-300 rounded-md focus:outline-none md:mr-3 mb-3 md:mb-0"
          />

          <Button type='submit' label='Search'></Button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
