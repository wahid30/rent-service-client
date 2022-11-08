import React, { useEffect, useState } from "react";
import ServicesHome from "../ServicesHome/ServicesHome";

const Services = () => {
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setCatagories(data));
  }, []);
  return (
    <div className="my-5">
      <h2 className="text-center">
        <div className="card w-full bg-base-100">
          <div className="card-body">
            <p>Demo of Services.</p>
          </div>
        </div>
      </h2>
      <div className="grid lg:grid-cols-3 gap-5">
        {catagories.slice(0, 3).map((category) => (
          <ServicesHome key={category._id} category={category}></ServicesHome>
        ))}
      </div>
    </div>
  );
};

export default Services;
