import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const service = useLoaderData();
  console.log(service);
  return <div>this is details</div>;
};

export default Details;
