import React from 'react';

const EmptyCard = ({ imgSrc, message }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-zinc-400 animate-fadeIn">
            <img
                src={imgSrc}
                alt="Empty State"
                className="w-64 h-64 opacity-80 mb-6 drop-shadow-lg"
            />
            <p className="text-xl font-medium text-center tracking-wide">{message}</p>
        </div>
    );
};


export default EmptyCard;
