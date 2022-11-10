import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const Reviews = ({ service }) => {
  const { _id, name, img, details, rating, price } = service;
  const { user } = useContext(AuthContext);
  // console.log(service);
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const photo = form.photo.value;
    const userRating = form.rating.value;
    const email = form?.email.value || "unregistered";
    const message = form.message.value;

    const review = {
      service: _id,
      serviceName: name,
      price,
      photo,
      customer: userName,
      email,
      rating: userRating,
      message,
    };
    // console.log(review);

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("review Placed Successfully");
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="my-5">
      <h1 className="text-center my-4 text-3xl">Add Your Review for: {name}</h1>
      <form onSubmit={handlePlaceOrder}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
          />
          <input
            name="photo"
            type="url"
            placeholder="Your photo url"
            className="input input-bordered w-full"
          />
          <input
            name="rating"
            type="text"
            placeholder="Rating"
            className="input input-bordered w-full"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            defaultValue={user?.email}
            className="input input-bordered w-full"
            readOnly
          />
        </div>
        <textarea
          name="message"
          className="mt-3 textarea w-full textarea-bordered h-[140px]"
          placeholder="Your Message"
        ></textarea>
        <input className="btn my-3" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Reviews;
