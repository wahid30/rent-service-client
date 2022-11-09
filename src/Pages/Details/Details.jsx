import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Reviews from "../AllServices/Reviews/Reviews";

const Details = () => {
  useTitle("Details");
  const service = useLoaderData();
  const { _id, name, img, details, rating, price } = useLoaderData();

  return (
    <div className="my-5">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{name}</h1>
            <p className="mb-5 text-xl">{details}</p>
            <p className="text-2xl">Rating: {rating}</p>
            <p className="text-2xl">Price: {price}</p>
          </div>
        </div>
      </div>
      <div>
        <Reviews service={service}></Reviews>
      </div>
    </div>
  );
};

export default Details;
