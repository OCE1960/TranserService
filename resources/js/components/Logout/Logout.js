import React, { Component } from 'react';
import { getUser, removeUserSession } from '../utils/Auth'

function Logout(props) {
    const user = getUser();
 
    // handle click event of logout button
    const handleLogout = () => {
        removeUserSession();
        props.history.push('/login');
    };

    handleLogout()
        return '' ;
            
        
   
}

export default Logout;


