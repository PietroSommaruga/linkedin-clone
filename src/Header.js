import React from "react";
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption.js';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { logout, selectUser } from "./features/userSlice";

    function Header() {
        const user = useSelector(selectUser);
        const dispatch = useDispatch();

        const logoutOfApp = () => {
            dispatch(logout())
            auth.signOut();
        }
        return (
            <div className="header">

                <div className="header_left">
                    <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt=""/>
                    <div className="header_search">
                        {/* SearchIcon  */}
                        <SearchIcon/>
                        <input placeholder="Search" type="text"/>
                    </div>
                </div>
                <div className="header_right">
                    <HeaderOption Icon={HomeIcon} title='Home'/>
                    <HeaderOption Icon={SupervisorAccountIcon} title='My network'/>
                    <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                    <HeaderOption Icon={ChatIcon} title='Messaging'/>
                    <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                    <HeaderOption avatar={true} title='me' onClick={logoutOfApp}/>
                </div>
            </div>

        )
    }

    export default Header