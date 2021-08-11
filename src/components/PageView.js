import React from "react";
import { NavLink } from "react-router-dom";

function PageView(props) {
  const { children, title } = props;

  return (
    <div className="page">
      <div className="page-header">
        <div className="header-action">
          <NavLink to="/" className="btn-action"></NavLink>
          <div className="btn-action"></div>
          <div className="btn-action"></div>
        </div>
        <p className="title-page">{title || "Page View"}</p>
        <div className="header-action"></div>
      </div>
      <div className="page-body">{children}</div>
    </div>
  );
}

export default PageView;
