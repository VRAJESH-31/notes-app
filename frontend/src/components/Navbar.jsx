import React from 'react'
import ProfileInfo from './ProfileInfo';
import {useNavigate} from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate("/login");
    };

    return (
        
        <div className='bg-zinc-950 flex items-center justify-between px-6 py-2 drop-shadow text-white'>
            <h2 className="text-xl font-medium py-2">Notes</h2>
            <ProfileInfo onLogout={onLogout} />
        </div>
        
        
    )
}

export default Navbar
