import React, { useEffect, useState } from "react";
import { getFavorite, removeFavorite } from "../Utilities/Utility";
import PhoneCard from "../Components/PhoneCard";
import EmptyState from "../Components/UI/EmptyState";

const Favorites = () => {
  const [displayPhones, setDisplayPhones] = useState([]);
  useEffect(() => {
    const getDataFromStorage = getFavorite();
    setDisplayPhones(getDataFromStorage);
  }, []);

  const handleDelete = (id) => {
    removeFavorite(id);
    setDisplayPhones(getFavorite);
  };
  if(displayPhones.length === 0) {return <EmptyState></EmptyState>}
  return (
    <div className="mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayPhones.map((phone) => (
          <PhoneCard
            key={phone.id}
            phone={phone}
            deletable={true}
            handleDelete={handleDelete}
          ></PhoneCard>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
