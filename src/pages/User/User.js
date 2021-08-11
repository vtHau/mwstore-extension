import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PageView from "./../../components/PageView";
import { fetchUser, confirmUser, deleteUser } from "./../../actions/actions";

function User(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUser() {
      const res = await fetchUser();
      if (res) {
        setUsers(res);
      }
    }
    getUser();
  }, []);

  const confirmID = async (userID) => {
    const res = await confirmUser(userID);
    if (res) {
      setUsers(res);
      notify("Confirm user success");
    } else {
      setUsers([]);
    }
  };

  const deleteID = async (userID) => {
    const res = await deleteUser(userID);
    if (res) {
      setUsers(res);
      notify("Delete user success");
    } else {
      setUsers([]);
    }
  };

  const refreshPage = () => {
    async function getUser() {
      const res = await fetchUser();
      if (res) {
        setUsers(res);
      }
    }
    getUser();
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
    <PageView title="User Page">
      {users.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => (
              <tr key={key}>
                <th scope="row">{key}</th>
                <td>{user.userID}</td>
                <td>{user.userFullName}</td>
                <td className="comment-short">
                  {user.userEmail}
                  <p className="comment-full"> {user.userEmail}</p>
                </td>
                <td>{user.userPhone}</td>
                <td>{user.status === 1 ? "Confirm" : "Not confirm"}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => confirmID(user.userID)}
                  >
                    Confirm
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteID(user.userID)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h4 className="not-review">Not user to show</h4>
      )}
      <ToastContainer />
      <i className="fas fa-redo-alt refresh-icon" onClick={refreshPage}></i>
    </PageView>
  );
}

export default User;
