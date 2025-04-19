import React, { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard";
import Button from "./UI/usableButton";

const PhoneContainer = ({ phones }) => {
  const [displayPhones, setDisplayPhones] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    if (showAll) {
      setDisplayPhones(phones);
    } else {
      setDisplayPhones(phones.slice(0, 6));
    }
  }, [phones, showAll]);

  return (
    <div className="mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayPhones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone}></PhoneCard>
        ))}
      </div>
      <div className="mt-3 md:mt-5 lg:mt-8">
        <Button
          onClick={() => {
            setShowAll((previous) => !previous);
            if (showAll) window.scrollTo(0, 600);
          }}
          label={showAll ? "Show Less" : "Show All"}
        ></Button>
      </div>
    </div>
  );
};

export default PhoneContainer;
