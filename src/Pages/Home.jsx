import React, { useState } from "react";
import Hero from "../Components/Hero";
import PhoneContainer from "../Components/PhoneContainer";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  const [phones, setPhones] = useState(data);

  const handleSearch = (e, text) => {
    e.preventDefault();
    if (text === '') return setPhones(data)
    const searchedPhone = data.filter(
      (phone) =>
        phone?.name?.toLowerCase().split(' ').includes(text.toLowerCase()) ||
        phone.brand?.toLowerCase().split(' ').includes(text.toLowerCase())
    )
    setPhones(searchedPhone)
  }
  

  return (
    <>
      <Hero handleSearch={handleSearch}></Hero>
      <PhoneContainer phones={phones}></PhoneContainer>
    </>
  );
};

export default Home;
