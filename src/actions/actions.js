import CallAPI from "./../utils/CallAPI";
import axios from "axios";
import * as config from "./../config/config";

export const signinRequest = async (signin) => {
  const res = await CallAPI(config.API_SIGNIN, "POST", signin);

  if (typeof res !== "string" && typeof res === "object") {
    return res;
  } else {
    return false;
  }
};

export const signInToken = () => {
  const token = localStorage.getItem("TOKEN");
  if (token && token !== null) {
    CallAPI(config.API_SIGNIN_TOKEN, "POST", { token })
      .then((res) => {
        if (typeof res !== "string" && typeof res === "object") {
          const { token, adminInfo } = res;
          localStorage.setItem("TOKEN", token);
          localStorage.setItem("ADMIN_INFO", JSON.stringify(adminInfo));
        } else {
          localStorage.removeItem("TOKEN");
          localStorage.removeItem("ADMIN_INFO");
        }
      })
      .catch(() => {
        console.log("Error sigin via token");
      });
  } else {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("ADMIN_INFO");
  }
};

export const fetchReview = async () => {
  const info = {
    type: "GET_REVIEW_NOT_CONFIRM",
  };
  const res = await CallAPI(config.API_REVIEW, "POST", info);
  if (typeof res !== "string" && typeof res === "object") {
    return res;
  } else {
    return false;
  }
};

export const confirmReview = async (reviewID) => {
  const info = {
    type: "CONFIRM_REVIEW",
    reviewID,
  };
  const res = await CallAPI(config.API_REVIEW, "POST", info);
  if (typeof res !== "string" && typeof res === "object") {
    return res;
  } else {
    return false;
  }
};

export const deleteReview = async (reviewID) => {
  const info = {
    type: "DELETE_REVIEW",
    reviewID,
  };
  const res = await CallAPI(config.API_REVIEW, "POST", info);

  if (typeof res !== "string" && typeof res === "object") {
    return res;
  } else {
    return false;
  }
};

export const fetchUser = async () => {
  const info = {
    type: "GET_USER_NOT_CONFIRM",
  };
  const res = await CallAPI(config.API_USER, "POST", info);
  if (typeof res !== "string" && typeof res === "object") {
    return res;
  } else {
    return false;
  }
};

export const confirmUser = async (userID) => {
  const info = {
    type: "CONFIRM_USER",
    userID,
  };
  const res = await CallAPI(config.API_USER, "POST", info);

  if (typeof res !== "string" && typeof res === "object") {
    return res;
  } else {
    return false;
  }
};

export const deleteUser = async (userID) => {
  const info = {
    type: "DELETE_USER",
    userID,
  };
  const res = await CallAPI(config.API_USER, "POST", info);

  if (typeof res !== "string" && typeof res === "object") {
    return res;
  } else {
    return false;
  }
};

export const fetchWeather = async () => {
  const res = await axios({
    method: "GET",
    url: `${config.API_WEATHER}Saigon${config.API_WEATHER_KEY}`,
    data: null,
  });

  if (res.data !== undefined) {
    return res.data;
  } else {
    return false;
  }
};
