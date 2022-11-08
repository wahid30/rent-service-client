import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import AllServicesDetails from "../AllServicesDetails/AllServicesDetails";

const AllServices = () => {
  const data = useLoaderData();
  useTitle("AllServices");
  return (
    <div className="my-5">
      <h1 className="text-center my-5">All services are here</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {data.map((dt) => (
          <AllServicesDetails key={dt._id} dt={dt}></AllServicesDetails>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
