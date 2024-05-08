import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Register from "./pages/Register/Register";
import Login from './pages/Login/Login';
import Navbar from './components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contests from './pages/Contests/Contests';
import './App.scss';
import Footer from './components/Footer/Footer';
import Cookies from 'js-cookie';

function App() {
  const isAuthenticated = !!Cookies.get('access_token');

  return (
    <>
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route
            path='/contests'
            element={isAuthenticated ? <Contests /> : <Navigate to='/login' replace />}
          />
          <Route path='/home' element={<Home />} exact />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
