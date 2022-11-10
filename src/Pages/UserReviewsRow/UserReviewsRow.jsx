import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UserReviewsRow = ({ review, handleDelete, handleReviewUpdate }) => {
  const { _id, customer, message, photo, price, rating, serviceName, service } =
    review;
  console.log(review);
  const [reviewService, setReviewsService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setReviewsService(data));
  }, [service]);
  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
            X
          </button>
          <ToastContainer />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {reviewService?.img && <img src={reviewService.img} alt="" />}
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{rating}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">${price}</span>
      </td>
      <td>Purple</td>
      <th>
        <button
          onClick={() => handleReviewUpdate(_id)}
          className="btn btn-ghost btn-xs"
        >
          Update
        </button>
      </th>
    </tr>
  );
};

export default UserReviewsRow;
