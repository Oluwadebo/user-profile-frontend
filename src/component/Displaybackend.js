import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import axios from 'axios';

const Displaybackend = () => {
    const [todos, settodos] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5006/display").then((data) => {
            settodos(data.data.result);
        })
    }, [])
    const delet = (val) => {
        console.log(val);
        axios.post("http://localhost:5006/del", { id: val }).then((data) => { })
        window.location.reload()
    };
    const edit = () => {

    }
    console.log(todos);
    return (
        <>
            <center>
                <h2 className="my-3">Todo Table</h2>
            </center>
            {/* <div className="container">
                <div className="table-responsive">
                    <table className="table table-success table-striped shadow table-bordered">
                        <tr>
                            <th><h3 className="px-5">S/N</h3></th>
                            <th><h3 className="px-5">FIRSTNAME</h3></th>
                            <th><h3 className="px-5">LASTNAME</h3></th>
                            <th><h3 className="px-5">SCHOOL</h3></th>
                            <th colspan="2"><h3 className="px-5">ACTIONS</h3></th>
                        </tr>
                        {todos.map((item, index) => (
                            <tr key={index} >
                                <td><p className='px-5'>{index + 1}</p></td>
                                <td><p className='px-5'>{item.firstname}</p></td>
                                <td><p className='px-5'>{item.lastname}</p></td>
                                <td><p className='px-5'>{item.school}</p></td>
                                <td>
                                    <img src={item.file} alt="images" className="img-fluid" />
                                </td>
                                <td><p className='px-5 fa fa-edit clo py-3' name="id" onClick={() => edit(item._id)}></p></td>
                                <td><p className='px-5 fa fa-trash colo py-3' onClick={() => delet(item._id)}></p></td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div> */}
        </>
    )
}

export default Displaybackend