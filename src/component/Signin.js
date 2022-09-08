import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [allUser, setallUser] = useState([]);
  useEffect(() => {
    if (localStorage.wwtbam) {
      let detail = JSON.parse(localStorage.wwtbam);
      setallUser(detail);
    } else {
      setallUser([]);
    }
  }, []);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // onSubmit: (values) => {
    //   setallUser(allUser.push(values));
    //   localStorage.setItem("wwtbam", JSON.stringify(allUser));
    //   navigate("/");
    // },
    validationSchema: yup.object({
      email: yup
        .string()
        .required("This field is required")
        .email("must be a valid email"),
      password: yup
        .string()
        .required("This field is required")
        .min(5, "password is weak, must be greater than six"),
    }),
  });
  return (
    <>
      <div className="container">
        <div className="row mx-auto my-5">
          <div className="shadow col-12 col-md-8 mx-auto px-4 pb-3 asd">
            <h2 className="m-4 text-light">
              <b><i>SIGN-IN</i></b>
            </h2>
            <form action="" onSubmit={formik.handleSubmit}>
              <div className="form-floating">
                <input
                  type="email"
                  placeholder="Your email"
                  className={
                    formik.errors.email && formik.touched.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onChange={formik.handleChange}
                  style={{ backgroundColor: "#F5F7FA" }}
                  name="email"
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && (
                  <div style={{ color: "red" }} className="my-2">
                    {formik.errors.email}
                  </div>
                )}
                <label>&#x1F4E7;&nbsp; Your email</label>
              </div>
              <div className="form-floating my-3">
                <input
                  type="password"
                  placeholder="Your password"
                  className={
                    formik.errors.password && formik.touched.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  maxLength={10}
                  onChange={formik.handleChange}
                  style={{ backgroundColor: "#F5F7FA" }}
                  name="password"
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && (
                  <div style={{ color: "red" }} className="my-2">
                    {formik.errors.password}
                  </div>
                )}
                <label>&#x1F512;&nbsp; Your password</label>
                <button
                  type="submit"
                  className="btn btn-success form-control py-3 mt-3"
                >
                  Sign-In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;