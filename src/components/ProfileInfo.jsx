import React from 'react';
import { getInitial } from '../utils/helper';

const ProfileInfo = ({ userInfo, onLogout }) => {
    if (!userInfo) return null;
    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 gap-2 px-3 py-2 bg-zinc-800 border border-zinc-700 rounded shadow shadow-emerald-500/20 w-full sm:w-auto h-auto sm:h-14 items-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-600 text-white text-base font-semibold mx-auto sm:mx-0">
                {getInitial(userInfo?.fullName)}
            </div>
            <div className="flex flex-col items-center sm:items-start w-full">
                <p className="text-base font-semibold text-white break-words w-full text-center sm:text-left">{userInfo.fullName}</p>
                <button
                    className="mt-1 text-xs text-amber-300 underline hover:text-amber-400 transition cursor-pointer"
                    onClick={onLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default ProfileInfo;
