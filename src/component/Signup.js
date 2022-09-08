import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [allUser, setallUser] = useState([]);
  useEffect(() => {
    if (localStorage.asmember) {
      let detail = JSON.parse(localStorage.asmember);
      setallUser(detail);
    } else {
      setallUser([]);
    }
  }, []);
  const formik = useFormik({
    initialValues: {
      firstname: "",
      Lastname: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      let User = allUser.push(values);
      setallUser(allUser.push(values));
      console.log(allUser);
      localStorage.setItem("asmember", JSON.stringify(allUser));
      navigate("/");
    },
    validationSchema: yup.object({
      firstname: yup
        .string()
        .required("This field is required")
        .min(4, "must be greater than four"),
      Lastname: yup
        .string()
        .required("This field is required")
        .min(3, "must be greater than three"),
      email: yup
        .string()
        .required("This field is required")
        .email("must be a valid email"),
      password: yup
        .string()
        .required("This field is required")
        .min(5, "password is weak, must be greater than 5"),
    }),
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8 mx-auto">
            <h2 className="m-4"><b>Create an account</b></h2>
            <form action="" onSubmit={formik.handleSubmit}>
              <div className="form-floating">
                <input
                  type="text"
                  placeholder="Your firstname"
                  className={
                    formik.errors.firstname && formik.touched.firstname
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onChange={formik.handleChange}
                  style={{ backgroundColor: "#F5F7FA" }}
                  name="firstname"
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstname && (
                  <div style={{ color: "red" }} className="my-2">
                    {formik.errors.firstname}
                  </div>
                )}
                <label>&#x1F464;&nbsp; Your firstname</label>
              </div>
              <div className="form-floating mt-2">
                <input
                  type="text"
                  placeholder="Your Lastname"
                  className={
                    formik.errors.Lastname && formik.touched.Lastname
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onChange={formik.handleChange}
                  style={{ backgroundColor: "#F5F7FA" }}
                  name="Lastname"
                  onBlur={formik.handleBlur}
                />
                {formik.touched.Lastname && (
                  <div style={{ color: "red" }} className="my-2">
                    {formik.errors.Lastname}
                  </div>
                )}
                <label>&#x1F464;&nbsp; Your Lastname</label>
              </div>
              <div className="form-floating mt-2">
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
              <div className="form-floating mt-2">
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
                  className="btn form-control py-3 mt-3"
                  style={{ background: "#1FC69D", border: "none" }}
                >
                  Create account
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
