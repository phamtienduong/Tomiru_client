
import React, { useState } from 'react'

import Profile from './Page/Profile/Profile';
import ProfileUser from './Page/Profile/ProfileUser';
import Notifications from './Page/Notifications/Notifications';
import HomePage from './Page/HomePage/HomePage';
import Header from './Components/Header/Header';



export default function App() {
    return (
        <>
            {/* <Profile /> */}
            {/* <ProfileUser/> */}
            {/* <Notifications/> */}
            <Header/>
            <HomePage/>
        </>
    );
}