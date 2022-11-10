import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const storedUser = useLoaderData();
  const [user, setUser] = useState(storedUser);
  const handleUpdateUser = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/reviews/${storedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("User Updated");
        }
      });
  };
  const handleInputChange = (event) => {
    const form = event.target;
    const field = form.name;
    const value = form.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center my-4 text-3xl">
          Update Review for:
          {storedUser.name ? storedUser.name : storedUser.customer}
        </h1>
        <form onSubmit={handleUpdateUser}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <input
              onChange={handleInputChange}
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              onChange={handleInputChange}
              name="photo"
              type="url"
              placeholder="Your photo url"
              className="input input-bordered w-full"
            />
            <input
              onChange={handleInputChange}
              name="rating"
              type="text"
              placeholder="Rating"
              className="input input-bordered w-full"
            />
            <input
              onChange={handleInputChange}
              name="email"
              type="email"
              placeholder="Your Email"
              defaultValue={user?.email}
              className="input input-bordered w-full"
              readOnly
            />
          </div>
          <textarea
            onChange={handleInputChange}
            name="message"
            className="mt-3 textarea w-full textarea-bordered h-[140px]"
            placeholder="Your Message"
          ></textarea>
          <input className="btn my-3" type="submit" value="Update User" />
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;
