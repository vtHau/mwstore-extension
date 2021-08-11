import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { signinRequest } from "../../actions/actions";
import "./Signin.css";
import avatar from "./../../assets/image/info.png";

function SigninPage(props) {
  const [status, setStatus] = useState(false);
  const token = localStorage.getItem("TOKEN");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email không hợp lệ")
        .required("Nhập địa chỉ Email!"),
      password: Yup.string()
        .min(8, "Mật khẩu phải từ 8 ký tự")
        .required("Nhập mật khẩu!"),
    }),
    onSubmit: async (values) => {
      const res = await signinRequest(values);
      if (res) {
        const { token, adminInfo } = res;
        localStorage.setItem("TOKEN", token);
        localStorage.setItem("ADMIN_INFO", JSON.stringify(adminInfo));
      } else {
        setStatus(true);
      }
    },
  });

  if (token !== null) {
    return <Redirect to="/admin" />;
  }

  return (
    <div className="sigin-page">
      <div className="signup">
        <img src={avatar} className="avatar-signin" alt="" />
        <h4 className="signup-heading">MW Store</h4>
        <form className="signup-form" onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <input
              id="email"
              type="text"
              name="email"
              className="form-input"
              value={formik.values.email}
              onFocus={() => setStatus(false)}
              onChange={formik.handleChange}
              placeholder="Nhập địa chỉ Email của bạn..."
            />
            {formik.errors.email && formik.touched.email && (
              <p className="input-error">{formik.errors.email}</p>
            )}
          </div>
          <div className="form-group">
            <input
              id="name"
              type="password"
              name="password"
              className="form-input"
              onFocus={() => setStatus(false)}
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Nhập mật khẩu của bạn..."
            />
            {formik.errors.password && formik.touched.password && (
              <p className="input-error">{formik.errors.password}</p>
            )}
          </div>

          {status && <p className="input-error">Email or password wrong</p>}

          <button type="submit" className="form-submit">
            <i className="fas fa-chevron-circle-right btn-submit"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SigninPage;
