import React from 'react';

const AddEditNotes = () => {
    return (
        <div className="max-w-3xl mx-auto mt-10 bg-zinc-800 border border-zinc-700 p-6 rounded shadow-2xl shadow-emerald-500/40 text-white">
            {/* Title Field */}
            <div className="flex flex-col gap-2 mb-5">
                <label className="text-sm font-medium text-zinc-300">TITLE</label>
                <input
                    type="text"
                    className="text-xl bg-zinc-900 text-white border border-zinc-600 rounded px-4 py-2 focus:outline-none focus:border-emerald-500"
                    placeholder="Go to gym"
                />
            </div>

            {/* Content Field */}
            <div className="flex flex-col gap-2 mb-5">
                <label className="text-sm font-medium text-zinc-300">CONTENT</label>
                <textarea
                    className="bg-zinc-900 text-white border border-zinc-600 rounded px-4 py-3 focus:outline-none focus:border-emerald-500"
                    placeholder="Write your note here..."
                    rows={10}
                ></textarea>
            </div>

            {/* Tags Field */}
            <div className="flex flex-col gap-2 mb-6">
                <label className="text-sm font-medium text-zinc-300">TAGS</label>
                <input
                    type="text"
                    className="text-sm bg-zinc-900 text-white border border-zinc-600 rounded px-4 py-2 focus:outline-none focus:border-emerald-500"
                    placeholder="#work, #important"
                />
            </div>

            {/* Add Button */}
            <div className="text-right">
                <button
                    className="w-full h-10 bg-emerald-600 text-white rounded hover:bg-emerald-500 transition shadow shadow-emerald-400/30"
                >
                    ADD
                </button>
            </div>
        </div>
    );
};

export default AddEditNotes;
