import React, { useState } from 'react'
import ProfileInfo from './ProfileInfo';
import { useNavigate } from "react-router-dom";
import SearchBar from './SearchBar';

const Navbar = ({userInfo}) => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const onLogout = () => {
        localStorage.clear()
        navigate("/login");
    };

    const handleSearch = () => {
        
    };

    const onClearSearch = () => {
        setSearchQuery("");
    }

    return (

        <div className='bg-zinc-950 flex items-center justify-between px-6 py-2 drop-shadow text-white'>
            <h2 className="text-xl font-medium py-2">Notes</h2>
            <SearchBar value={searchQuery}
                onChange={({ target }) => {
                    setSearchQuery(target.value);
                }}
                handleSearch={handleSearch}
                onClearSearch={onClearSearch}
            />
            <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
        </div>


    )
}

export default Navbar
