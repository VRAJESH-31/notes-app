import React from 'react';
import { getInitial } from '../utils/helper';

const ProfileInfo = ({ onLogout }) => {
    return (
        <div className="flex items-center gap-3 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded shadow shadow-emerald-500/20 h-14">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-600 text-white text-sm font-semibold">
                {getInitial("John Willam")}
            </div>
            <div className="leading-tight">
                <p className="text-sm font-semibold text-white">John Willam</p>
                <button
                    className="text-xs text-amber-300 underline hover:text-amber-400 transition cursor-pointer"
                    onClick={onLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default ProfileInfo;
