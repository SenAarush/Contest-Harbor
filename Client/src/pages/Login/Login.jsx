import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import Cookies from "js-cookie"

import styles from "./Login.module.scss"
import Footer from "../../components/Footer/Footer"

function Login() {
  const navigate = useNavigate()

  // Changin the state of the parameters based on onChange event handler 
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const submitLogin = async () => {
    try {
      // Send a POST request to '/user/login' with the email and password in the request body
      const response = await axios.post('http://localhost:3000/user/login', { email, password }, {
        headers: {
          'Content-Type': 'application/json',
        }
      })

      // Reset the error state to null
      setError(null)

      // Display a success toast message
      toast.success("Login Successful", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })

      // Store the token (or relevant data) in LocalStorage
      // localStorage.setItem("jwt", response.data.token)
      Cookies.set('access_token', response.data.token)

      // Perform any additional actions after successful login, such as navigating to another page
      navigate('/contests')
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
    submitLogin()
  }
  return (
    <>
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit}>
          <p>Login to get started!</p>
          <label>Email</label>
          <input name="email" type="email" placeholder="user@email.com" onChange={(e) => {
            setEmail(e.target.value)
          }} value={email} />
          <label>Password</label>
          <input name="pass" type="password" placeholder="********" onChange={(e) => {
            setPassword(e.target.value)
          }} value={password} />

          <button type="submit">Log In</button>

          <div className={styles.foot}>
            Not Registered?<span onClick={() => {
              navigate('/register')
            }}>Register</span>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login