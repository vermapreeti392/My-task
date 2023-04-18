import React from 'react'
import './job.css'
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/register')
  }
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  const token = localStorage.getItem('token')
  return (
    <div className="navbar-main">
      <div className='nav'>
        <div >
          Home
        </div>
        <div >
          Jobs
        </div>
        <div>
          Talent
        </div>
        <div>
          Post a job
        </div>
        <div>
          Feed
        </div>
      </div>
      {!token ? <div style={{ marginRight: '50px' }} onClick={handleLogin}>
        Login </div>: <div style={{ marginRight: '50px' }} onClick={handleLogout}>
        Logout </div>}
    </div>
  )
}