import React from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from 'react-icons/io';

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
    return (
        <div className="w-full sm:w-80 flex items-center px-4 py-[6px] bg-zinc-900 border border-zinc-600 rounded shadow shadow-emerald-500/10">
            <input
                type="text"
                placeholder="Search Notes"
                className="w-full text-sm bg-transparent text-white placeholder:text-zinc-400 outline-none"
                value={value}
                onChange={onChange}
            />
            {value && (
                <IoMdClose
                    className="ml-2 text-zinc-400 hover:text-red-500 cursor-pointer transition duration-200"
                    onClick={onClearSearch}
                />
            )}
            <FaMagnifyingGlass
                className="ml-2 text-zinc-400 hover:text-white cursor-pointer transition duration-200"
                onClick={handleSearch}
            />
        </div>
    );
};

export default SearchBar;
