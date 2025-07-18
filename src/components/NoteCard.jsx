import React from 'react';
import { MdOutlinePushPin, MdCreate, MdDelete } from 'react-icons/md';
import moment from 'moment';

const NoteCard = ({ title, date, content, tags, isPinned, onEdit, onDelete, onPinNote }) => {
    return (
        <div className="w-full sm:w-72 md:w-80 bg-zinc-800 border border-zinc-700 rounded-md shadow-xl shadow-emerald-500/40 px-4 py-3 text-white text-sm">
            <div className="flex justify-between items-start mb-2">
                <div>
                    <h6 className="text-base font-semibold text-white">{title}</h6>
                    <span className="text-xs text-zinc-400">{moment(date).format('Do MMM YYYY')}</span>
                </div>
                <MdOutlinePushPin
                    size={18}
                    className={`cursor-pointer hover:text-emerald-400 transition ${isPinned ? 'text-emerald-500' : 'text-zinc-400'}`}
                    onClick={onPinNote}
                />
            </div>

            <p className="text-zinc-300 mb-3 leading-snug">
                {content?.slice(0, 80)}
                {content?.length > 80 && "..."}
            </p>

            <div className="flex justify-between items-center">
                <span className="text-xs text-amber-300 break-all">
                    {tags.map((item) => `#${item} `)}
                </span>
                <div className="flex items-center gap-3">
                    <MdCreate
                        size={16}
                        className="text-blue-400 cursor-pointer hover:text-blue-500 transition"
                        onClick={onEdit}
                    />
                    <MdDelete
                        size={16}
                        className="text-red-400 cursor-pointer hover:text-red-500 transition"
                        onClick={onDelete}
                    />
                </div>
            </div>
        </div>
    );
};

export default NoteCard;
