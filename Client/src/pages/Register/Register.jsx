import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from "./Register.module.scss"
import Cookies from "js-cookie";
import Footer from "../../components/Footer/Footer";

function Register() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const submitRegistration = async () => {
    try {
      // Send a POST request to '/user/login' with the email and password in the request body
      const response = await axios.post('http://localhost:3000/user/signup', { name, email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        });

      // Reset the error state to null
      setError(null);

      // Display a success toast message
      toast.success("Registration Successful", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      // Store the token (or relevant data) in LocalStorage
      // localStorage.setItem("jwt", response.data.token);
      Cookies.set(response.data.token)

      // Perform any additional actions after successful login, such as navigating to another page
      navigate('/contests');
    } catch (error) {

      // If an error occurs during the request:
      // Set the error state with the error message from the server
      setError(error.response.data.error);

      // Display an error toast message
      toast.error(error.response.data.error, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    submitRegistration()
  }

  return (
    <>
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit}>
          <p>Register Here!</p>
          <label>Username</label>
          <input name="name" type="text" placeholder="Unique user name" onChange={(e) => { setName(e.target.value) }} value={name} />
          <label>Email</label>
          <input name="email" type="email" placeholder="user@email.com" onChange={(e) => { setEmail(e.target.value) }} value={email} />
          <label>Password</label>
          <input name="pass" type="password" placeholder="********" onChange={(e) => { setPassword(e.target.value) }} value={password} />

          <button type="submit" >Register</button>

          <div className={styles.foot}>
            Already Registered?<span onClick={() => {
              navigate('/login')
            }}>Login</span>
          </div>

        </form>
      </div>
    </>
  )
}

export default Register


