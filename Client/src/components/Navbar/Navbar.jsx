import { useNavigate, useLocation } from "react-router-dom"

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LuAnchor } from "react-icons/lu";

import styles from "./Navbar.module.scss"
import Cookies from "js-cookie";

const Navbar = () => {

  const navigate = useNavigate()

  const token = Cookies.get('access_token')

  const notifyLogout = () => {
    toast("😲 Sorry to see you go!", {
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

  const onLogout = () => {
    Cookies.remove('access_token')
    navigate("/home")
  }
  const handleClick = () => {
    onLogout()
    notifyLogout()
  }
  return (
    <>
      <nav>
        <ul>
          <li>Contest Harbor<LuAnchor /></li>
          <li onClick={() => { navigate('/home') }}>Home</li>
          {!token && (
            <li onClick={() => { navigate('/login') }}>Contests</li>
          )}
          {token && (
            <li onClick={() => {navigate('/contests')}}>Contests</li>
          )}
          {/* <li onClick={() => { navigate('/contests') }}>Contests</li> */}
          <li onClick={() => { navigate('/register') }}>Register</li>
          {!token && (
            <li>
              <button onClick={() => { navigate('/login') }}>Login</button>
            </li>
          )}
          {token && (
            <li>
              <button onClick={handleClick}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </>
  )
}

export default Navbar