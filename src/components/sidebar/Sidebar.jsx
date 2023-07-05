import React from 'react';
import "./Sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import Groups2Icon from '@mui/icons-material/Groups2';
import PeopleIcon from '@mui/icons-material/People';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import InputOutlinedIcon from '@mui/icons-material/InputOutlined';
import {Link} from "react-router-dom";
import { DarkModeContext } from '../../context/darkMOdeContext';
import { useContext } from 'react';
import image from '../../image/flash6.jpg';


const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext);

  return (

    <div className='sidebar'>
      <div className='top'>
        <Link to="/" style={{textDecoration:"none"}}>
        <img src={image} alt="Logo" className="image-style"/>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <DashboardIcon/>
            <span>Dashboard</span>
          </li>
          <p className='title'>LIST</p>
          <Link to="/passengers" style={{textDecoration:"none"}}>
          <li>
          <Groups2Icon/>
          <span>Passengers</span>
          </li> 
          </Link>

          <Link to="/riders" style={{textDecoration:"none"}}>

          <li>
            <PeopleIcon/>
            <span>Riders</span>
          </li>
          </Link>
          <li>
            <LocalShippingIcon/>
            <span>Rides</span>
          </li>
          <li>
            <MonetizationOnIcon />
            <span>Earnings</span>
          </li>
          <p className='title'>USEFUL</p>
          <li>
          <LeaderboardIcon />
            <span>Status</span>
          </li>
          <li>
          <NotificationsActiveOutlinedIcon/>
            <span>Notification</span>
          </li>
          <p className='title'>SERVICES</p>
          <li>
            <LocalHospitalOutlinedIcon />
            <span>System health</span>
          </li>
          <li>
            <InputOutlinedIcon />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsOutlinedIcon/>
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <AccountBoxRoundedIcon/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutRoundedIcon/>
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className='bottom'>
        <div 
        className="colorOption" 
        onCLick ={() => dispatch({type: "LIGHT" })}
        ></div>
        <div 
        className="colorOption" 
        onCLick ={() => dispatch({type: "DARK" })}
        ></div>
        
        </div>
        </div>
    
  )
}

export default Sidebar