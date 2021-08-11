import React from "react";
import {
  useRouteMatch,
  Route,
  NavLink,
  Redirect,
  Switch,
} from "react-router-dom";

import "./Admin.css";
import Comment from "../Comment/Comment.js";
import User from "./../User/User";
import Home from "./../Home/Home";
import SignOut from "./../SignOut/SignOut";
import Info from "./../Info/Info";
import Weather from "./../Weather/Weather";

import user from "./../../assets/image/user.png";
import comment from "./../../assets/image/comment.png";
import info from "./../../assets/image/info.png";
import lock from "./../../assets/image/lock.png";
import weather from "./../../assets/image/weather.png";

function Admin(props) {
  const token = localStorage.getItem("TOKEN");

  let { path, url } = useRouteMatch();
  if (token === null) {
    return <Redirect to="/" />;
  }

  return (
    <div className="admin-page">
      <div className="content">
        <Switch>
          <Route path={`${path}/user`}>
            <User />
          </Route>
          <Route path={`${path}/comment`}>
            <Comment />
          </Route>
          <Route path={`${path}/lock`}>
            <SignOut />
          </Route>
          <Route path={`${path}/info`}>
            <Info />
          </Route>
          <Route path={`${path}/weather`}>
            <Weather />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </div>
      <div className="side-bar">
        <NavLink
          activeClassName="active-link"
          className="box-link"
          to={`${url}/weather`}
        >
          <span className="name-feature">Weather</span>
          <img src={weather} alt="Logo" className="icon-app" />
        </NavLink>
        <NavLink
          exact
          activeClassName="active-link"
          className="box-link"
          to={`${url}/user`}
        >
          <span className="name-feature">User</span>
          <img src={user} alt="Logo" className="icon-app" />
        </NavLink>

        <NavLink
          activeClassName="active-link"
          className="box-link"
          to={`${url}/comment`}
        >
          <span className="name-feature">Comment</span>
          <img src={comment} alt="Logo" className="icon-app" />
        </NavLink>
        <NavLink
          activeClassName="active-link"
          className="box-link"
          to={`${url}/info`}
        >
          <span className="name-feature">Info</span>
          <img src={info} alt="Logo" className="icon-app" />
        </NavLink>
        <NavLink
          activeClassName="active-link"
          className="box-link"
          to={`${url}/lock`}
        >
          <span className="name-feature">lock</span>
          <img src={lock} alt="Logo" className="icon-app" />
        </NavLink>
      </div>
    </div>
  );
}

export default Admin;
