import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import UserReviewsRow from "../UserReviewsRow/UserReviewsRow";

const UserReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  // for delete
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this review"
    );
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = reviews.filter((rv) => rv._id !== id);
            setReviews(remaining);
          }
        });
    }
  };
  const handleReviewUpdate = (id) => {
    fetch(`http://localhost:5000/reviews/${id}`, {
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
      <h2 className="text-5xl">Total Review is: {reviews.length}</h2>
      <div className="my-5">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Delete</th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
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
