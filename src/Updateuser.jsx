import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import STYLE from "./resources/usignup.module.css"
import { toast } from 'react-toastify'

const Updateuser = () => {
  let {id} = useParams();

    let [userData, setUserData] = useState({
        firstname: "", lastname: "", mobile: "", email: "", dob: ""
    })

    
    //onChange function to map the value to the userData
    let handleChange = (e) => {
        let { name, value } = e.target;
        setUserData({ ...userData, [name]: value })
    }



    //getting user data based on Id
    useEffect(
        () => {
            const getUser = async () => {
                try {
                    let res = await axios.get(`http://localhost:4000/user/${id}`);
                    setUserData(res.data);
                }
                catch (error) {
                    console.log(error);
                    toast.error("Failed to Load User!!!");
                }

            }
            getUser();
        }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:4000/user/${id}`,userData);
            toast.success(` data updated Successfully`);


        }
        catch (error) {
                    console.log(error);
                    toast.error("Failed to Update User!!!");
                }

        }


    return (
        <div>

            <div id={STYLE.Uform}>
        <table id={STYLE.formTable} border={"1px"}>
          <tbody>
            <tr>
              <td>
                <label htmlFor="firstname">First Name :</label>
              </td>
              <td>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  onChange={handleChange}
                  value={userData.firstname}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="lastname">Last Name :</label>
              </td>
              <td>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  onChange={handleChange}
                  value={userData.lastname}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="dob">Date of Birth :</label>
              </td>
              <td>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  onChange={handleChange}
                  value={userData.dob}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="email">Email :</label>
              </td>
              <td>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={userData.email}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="mobile">Mobile Number :</label>
              </td>
              <td>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  onChange={handleChange}
                  value={userData.mobile}
                />
              </td>
            </tr>

             
            <tr>
              <td>
                <button onClick={handleUpdate}>UPDATE</button>
              </td>

              <td>
                 <button>RESET</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

        </div>
    )
}

export default Updateuser
