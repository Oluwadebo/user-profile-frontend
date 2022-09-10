import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Takequiz = () => {
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
  return (
    <>
      <div className="container text-light">
        <center>
          <div className="asd">
            <h5 className="py-2">0</h5>
          </div>
        </center>
        <div className="row my-2">
          <div className="col-12">
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              esse asperiores adipisci maxime unde aliquam voluptatum quae alias
              quia dolor aut molestias dicta fugiat ratione dolorem nulla ea
              debitis eum.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Takequiz;
