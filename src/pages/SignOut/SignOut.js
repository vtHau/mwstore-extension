import React from "react";
import { NavLink, Redirect, useHistory } from "react-router-dom";

function SignOut(props) {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("ADMIN_INFO");
    history.replace("/");
  };
  return (
    <div className="page-trans">
      <div className="box-signout">
        <div className="signout-content">You are want signout ?</div>
        <div className="signout-bottom">
          <div className="signout-btn" onClick={logout}>
            Yes
          </div>
          <NavLink to="/" className="signout-btn">
            No
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SignOut;
