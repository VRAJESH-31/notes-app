import React, { useState } from 'react';
import ProfileInfo from './ProfileInfo';
import { useNavigate } from "react-router-dom";
import SearchBar from './SearchBar';

const Navbar = ({ userInfo, onSearchNote, handleClearSearch, onlyTitle = false }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const onLogout = () => {
        localStorage.clear()
        navigate("/");
    };

    const handleSearch = () => {
        if (searchQuery) {
            onSearchNote(searchQuery);
        }
    };

    const onClearSearch = () => {
        setSearchQuery("");
        handleClearSearch()
    }

    if (onlyTitle) {
        return (
            <div className='bg-zinc-950 px-4 sm:px-6 py-3 sm:py-2 drop-shadow text-white'>
                <h2 className="text-xl font-medium w-full text-center sm:w-auto sm:text-left">NOTESFLOW</h2>
            </div>
        );
    }
    return (
        <div className='bg-zinc-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 px-4 sm:px-6 py-3 sm:py-2 drop-shadow text-white'>
            <h2 className="text-xl font-medium w-full text-center sm:w-auto sm:text-left">NOTESFLOW</h2>

            <SearchBar
                value={searchQuery}
                onChange={({ target }) => setSearchQuery(target.value)}
                handleSearch={handleSearch}
                onClearSearch={onClearSearch}
            />

            <div className="w-full sm:w-auto">
                <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
            </div>
        </div>
    )
}

export default Navbar;
