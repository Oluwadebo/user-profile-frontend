import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import download from "./assets/download.jfif";
import Billionaire from "./assets/Teni - Billionaire (NetNaija.com).mp3";
import TeniBillionaire from "./assets/Teni - Billionaire (NetNaija.com).mp4";

const Dashboard = () => {
  const [allUser, setallUser] = useState([]);
  const [currentuser, setcurrentuser] = useState("");
  const [currentuserdetails, setcurrentuserdetails] = useState({});
  const [customer, setcustomer] = useState({});
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
  }, []);
  const logout = () => {
    localStorage.removeItem("signinEmail");
    navigate("/Signin");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow asda">
        <div className="container">
          <button
            className="navbar-toggler sd"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <span className="navbar-text">
                <button
                  className="btn btn-success form-control py-3 mt-3 asd"
                  onClick={logout}
                >
                  Log-Out
                </button>
            </span>
          </div>
        </div>
      </nav>
      <div className="container text-light">
        <center>
          <div className="row mx-auto">
            <div className="col-12 mt-4 mb-3 dsa">
              <h2 className="py-1">${customer.score}</h2>
            </div>
            <div className="col-12">
              <audio className="w-100" controls loop src={Billionaire} />
              {/* <img src={download} alt="" className="img-fluid" /> */}
              <video
                className="w-100 asd"
                muted
                loop
                autoPlay
                src={TeniBillionaire}
              />
            </div>
            <div className="col-12">
              <Link to="/Takequiz">
                <button className="btn btn-success form-control py-3 mt-3 asd">
                  TAKE QUIZ
                </button>
              </Link>
            </div>
          </div>
        </center>
      </div>
    </>
  );
};

export default Dashboard;
