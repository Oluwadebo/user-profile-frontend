import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Admin = () => {
  const [allUser, setallUser] = useState([]);
  const [currentuser, setcurrentuser] = useState("");
  const [currentuserdetails, setcurrentuserdetails] = useState({});
  const [customer, setcustomer] = useState({});
  const [Error, setError] = useState("");
  const [admin, setadmin] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.wwtbam && localStorage.signinEmail && localStorage.users) {
      let AllUser = JSON.parse(localStorage.wwtbam);
      setallUser(JSON.parse(localStorage.wwtbam));
      setcurrentuser(JSON.parse(localStorage.signinEmail));
      setcurrentuserdetails(JSON.parse(localStorage.users));
      let email = JSON.parse(localStorage.users).email;
      let index = JSON.parse(localStorage.wwtbam).findIndex(
        (x) => x.email == email
      );
      setcustomer(AllUser[index]);
    } else {
      navigate("/Signin");
    }
    if (localStorage.admin) {
      let detail = JSON.parse(localStorage.admin);
      setadmin(detail);
    } else {
      setadmin([]);
    }
  }, []);
  const formik = useFormik({
    initialValues: {
      question: "",
    },
    onSubmit: (values) => {
      console.log(values);
      setadmin(admin.push(values));
      console.log(admin);
      localStorage.setItem("admin", JSON.stringify(admin));
    },
    validationSchema: yup.object({
      question: yup.string().required("This field is required"),
    }),
  });
  return (
    <>
      <div className="container text-light">
        <div className="row my-2">
          <div className="col-12">
            <center>
              <h2>Set Questions</h2>
            </center>
            <div className="row">
              <div className="col-12 col-md-4">
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#Money"
                  className="btn btn-success form-control py-3 mt-3 asd"
                >
                  Set Questions
                </button>
                <div className="modal" id="Money" data-bs-backdrop="static">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header text-dark">
                        <h5>W-W-T-B-A-M</h5>
                      </div>
                      <div className="modal-body">
                        <form action="" onSubmit={formik.handleSubmit}>
                          <label className="col-form-label text-dark">
                            Questions
                          </label>
                          <input
                            type="text"
                            onChange={formik.handleChange}
                            className={
                              formik.errors.question && formik.touched.question
                                ? "form-control is-invalid"
                                : "form-control"
                            }
                            name="question"
                          />
                          {formik.touched.question && (
                            <div style={{ color: "red" }} className="my-2">
                              {formik.errors.question}
                            </div>
                          )}
                          <button
                            type="submit"
                            className="btn btn-success form-control py-3 mt-3"
                          >
                            SUBMIT
                          </button>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close transaction
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
