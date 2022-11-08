import React from "react";

const ServicesHome = ({ category }) => {
  const { _id, name, img, details, rating, price } = category;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{rating}</div>
          </h2>
          <p>{details.slice(0, 100)}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Price:{price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;
