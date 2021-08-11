import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PageView from "./../../components/PageView";
import { showRating } from "./../../utils/showRating";
import {
  fetchReview,
  confirmReview,
  deleteReview,
} from "./../../actions/actions";

function Comment(props) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReview() {
      const res = await fetchReview();
      if (res) {
        setReviews(res);
      }
    }
    getReview();
  }, []);

  const confirmID = async (reviewID) => {
    const res = await confirmReview(reviewID);
    if (res) {
      setReviews(res);
      notify("Confirm comment success");
    } else {
      setReviews([]);
    }
  };

  const deleteID = async (reviewID) => {
    const res = await deleteReview(reviewID);
    if (res) {
      setReviews(res);
      notify("Delete comment success");
    } else {
      setReviews([]);
    }
  };

  const refreshPage = () => {
    async function getReview() {
      const res = await fetchReview();
      if (res) {
        setReviews(res);
      }
    }
    getReview();
  };

  const notify = (title) =>
    toast.success(title, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <PageView title="Comment Page">
      {reviews.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Star</th>
              <th scope="col">Comment</th>
              <th scope="col">Time</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, key) => (
              <tr key={key}>
                <th scope="row">{key}</th>
                <td>{review.userFullName}</td>
                <td>{showRating(review.star)}</td>
                <td className="comment-short">
                  {review.comment}
                  <p className="comment-full"> {review.comment}</p>
                </td>
                <td>{review.timeReview}</td>
                <td>{review.status === 1 ? "Confirm" : "Not confirm"}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => confirmID(review.reviewID)}
                  >
                    Confirm
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteID(review.reviewID)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h4 className="not-review">Not comment to show</h4>
      )}
      <ToastContainer />
      <i className="fas fa-redo-alt refresh-icon" onClick={refreshPage}></i>
    </PageView>
  );
}

export default Comment;
