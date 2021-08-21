import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav>
                <p onClick={() => onRouteChange('create')} className='f3 link dim black underline pa3 pointer'> Create</p>
                <p onClick={() => onRouteChange('browse')} className='f3 link dim black underline pa3 pointer'> Browse</p>
                <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'> Sign Out</p>
            </nav>
        );
    } else {
        return (
            <nav>
                <p onClick={() => onRouteChange('signin')} className='f4 link dim black pa2 pointer'> Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f4 link dim black pa2 pointer'> Register</p>
            </nav>
        );
    }
}

export default Navigation;