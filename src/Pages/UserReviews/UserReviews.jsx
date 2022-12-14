import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import UserReviewsRow from "../UserReviewsRow/UserReviewsRow";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UserReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://rent-services-server.vercel.app/reviews?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  // for delete
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this review"
    );
    if (proceed) {
      fetch(`https://rent-services-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast("Deleted Successfully!!!");
            const remaining = reviews.filter((rv) => rv._id !== id);
            setReviews(remaining);
          }
        });
    }
  };
  const handleReviewUpdate = (id) => {
    fetch(`https://rent-services-server.vercel.app/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = reviews.filter((rv) => rv._id !== id);
          const approving = reviews.find((rv) => rv._id === id);
          approving.status = "Approved";
          const newReviews = [approving, ...remaining];
          setReviews(newReviews);
        }
      });
  };
  return (
    <div>
      <h2 className="text-5xl">
        Total Review is:{" "}
        {reviews.length < 1 ? "No reviews were added" : reviews.length}
      </h2>
      <div className="my-5">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Delete</th>
                <th>Name</th>
                <th>Job</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <UserReviewsRow
                  key={review._id}
                  review={review}
                  handleDelete={handleDelete}
                  handleReviewUpdate={handleReviewUpdate}
                ></UserReviewsRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
