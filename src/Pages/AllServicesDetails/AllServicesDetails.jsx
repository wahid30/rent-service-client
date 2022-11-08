import React from "react";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const AllServicesDetails = ({ dt }) => {
  const { _id, name, img, details, rating, price } = dt;
  // console.log(name);
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl h-full">
        <figure>
          <PhotoProvider>
            <PhotoView src={img}>
              <img
                className="h-full"
                src={img}
                style={{ objectFit: "cover" }}
                alt=""
              />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{details.slice(0, 100)}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServicesDetails;
