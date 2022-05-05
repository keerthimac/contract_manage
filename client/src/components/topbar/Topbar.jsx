import React from "react";
import "./topbar.css";
import SettingsIcon from "@material-ui/icons/Settings";
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>React Admin</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconsContainer'>
            <NotificationsNoneIcon className='topIcon' />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconsContainer'>
            <LanguageIcon className='topIcon' />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconsContainer'>
            <SettingsIcon className='topIcon' />
            <span className='topIconBadge'>2</span>
          </div>
          <img
            src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='avatar'
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
