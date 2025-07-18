import React from 'react';
import { getInitial } from '../utils/helper';

const ProfileInfo = ({ userInfo, onLogout }) => {
    if (!userInfo) return null;
    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 gap-1 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded shadow shadow-emerald-500/20 h-auto sm:h-14 w-full sm:w-auto">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-600 text-white text-sm font-semibold">
                {getInitial(userInfo?.fullName)}
            </div>
            <div className="leading-tight text-center sm:text-left">
                <p className="text-sm font-semibold text-white">{userInfo.fullName}</p>
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
