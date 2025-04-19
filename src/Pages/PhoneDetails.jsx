import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { MdBookmarkAdd, MdShoppingCartCheckout } from "react-icons/md";
import Button from "../Components/UI/usableButton";
import { addCart, addFavorite, getCart } from "../Utilities/Utility";
import { CartContext } from "../Provider/Context";

const PhoneDetails = () => {
  const { setCart } = useContext(CartContext);
  const data = useLoaderData();
  const { id } = useParams();
  const singlePhone = data.find((phone) => phone.id === parseInt(id));
  const {
    image,
    name,
    model,
    brand,
    price,
    storage,
    camera_Info,
    description,
  } = singlePhone || {};

  const handleFavorites = () => {
    addFavorite(singlePhone);
  };
  const handleCart = () => {
    addCart(singlePhone);
    setCart(getCart());
  };

  return (
    <div className="w-full">
      <img src={image} className="w-full mx-auto md:w-auto  mb-8 mt-8" alt="" />
      <div className="flex justify-between">
        <h1 className="text-6xl font-thin mb-8">{name}</h1>
        <div className="space-x-2">
          <Button
            onClick={handleCart}
            label={<MdShoppingCartCheckout />}
          ></Button>
          <Button onClick={handleFavorites} label={<MdBookmarkAdd />}></Button>
        </div>
      </div>
      <div className="space-y-3">
        <h2 className="font-thin text-4xl">Details: </h2>
        <p>
          <span className="font-bold">Brand:</span> {brand}
        </p>
        <p>
          <span className="font-bold">Model:</span> {model}
        </p>
        {/* Storage Info */}
        <div className="flex gap-1">
          <p className="font-bold">Storage:</p>
          <div>
            {storage.map((item) => {
              return (
                <div key={item}>
                  <div>{item}</div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Price info */}
        <div className="flex gap-1">
          <p className="font-bold">Price:</p>
          <div>
            {Object.entries(price).map(([storage, price]) => (
              <p key={storage} className="">
                <span>{storage}:</span> <span>{price}</span>
              </p>
            ))}
          </div>
        </div>
        <p>
          <span className="font-bold">Camera Info:</span> {camera_Info}
        </p>
        <p className="mb-4">
          <span className="font-bold">Description:</span> {description}
        </p>
      </div>
    </div>
  );
};

export default PhoneDetails;
