import React from "react";

import PageView from "./../../components/PageView";
import info from "./../../assets/image/info.png";
import { API_URL } from "./../../config/config";

const URLImg = API_URL + "/admin/uploads/avatars/";

function Info(props) {
  const infoAdmin = JSON.parse(localStorage.getItem("ADMIN_INFO"));
  console.log(infoAdmin);

  return (
    <PageView title="Info system">
      <div className="full-content">
        <img
          className="image-admin"
          src={`${URLImg}${infoAdmin.adminImage}`}
          alt=""
        />
        <div className="info-box">
          <h3 className="admin-name">{infoAdmin.adminName}</h3>
          <h4 className="admin-desc">{infoAdmin.adminDescription}</h4>
          <h4 className="admin-desc admin-info">
            Email: {infoAdmin.adminEmail}
          </h4>
          <h4 className="admin-desc admin-info">
            Admin Macbook Pro (Retinna , 15 pouces, mi-2021)
          </h4>
          <h4 className="admin-desc admin-info">
            Processeur 2.5 GHZ Intel Core i9
          </h4>
          <h4 className="admin-desc admin-info">Memory 512GB 2000 Mhz DDDR6</h4>
          <h4 className="admin-desc admin-info">Graphisme GTX 3080</h4>
        </div>
      </div>
      <p className="text-footer">
        ™ et © 1983-2018 Apple Inc. Tous droits reserves. Licence garantie
      </p>
    </PageView>
  );
}

export default Info;
