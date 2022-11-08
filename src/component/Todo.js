import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Todo = () => {
  const navigate = useNavigate();
  const [file, setfile] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [school, setschool] = useState("");
  const [image, setimage] = useState("");
  const getfile = (e) => {
    let myfile = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(myfile)
    reader.onload = () => {
      setfile(reader.result);
    }
  }
  const upload = () => {
    const userdata = { file, firstname, lastname, school }
    axios.post("http://localhost:5006/files", userdata)
    navigate("/")
  }

  return (
    <>
      <div className="container">
        <div className="row mx-auto my-5">
          <div className="shadow col-12 col-md-9 mx-auto px-4 pb-3 card shadow">
            <h2 className="m-4">
              <b>
                <i>Profile</i>
              </b>
            </h2>
            <div>
              <input type="file" className="form-control my-2" onChange={(e) => getfile(e)} accept='image/*' />
              <input type="text" className="form-control my-2" placeholder="Firstname" onChange={(e) => setfirstname(e.target.value)} />
              <input type="text" className="form-control my-2" placeholder="Lastname" onChange={(e) => setlastname(e.target.value)} />
              <input type="text" className="form-control my-2" placeholder="school" onChange={(e) => setschool(e.target.value)} />
              <button className="btn btn-success form-control py-3 mt-3" onClick={upload}>Upload</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
