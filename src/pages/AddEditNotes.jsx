import React, { useState } from 'react';
import TagInput from '../components/TagInput';
import { MdClose } from "react-icons/md";
import axiosInstance from '../utils/axiosInstance';

const AddEditNotes = ({ noteData, type, getAllNotes, onClose , showToastMessage }) => {
    const [title, setTitle] = useState(noteData?.title || "");
    const [content, setContent] = useState(noteData?.content || "");
    const [tags, setTags] = useState(noteData?.tags || []);

    const [error, setError] = useState(null);

    //add notes 
    const addNewNotes = async () => {
        try {
            const response = await axiosInstance.post("/add-note", {
                title,
                content,
                tags,
            });

            if (response.data && response.data.note) {
                showToastMessage("NOTE ADDED SUCCESSFULLY");
                getAllNotes();
                onClose()
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message)
            }
        }
    };

    //edit note
    const editNote = async () => {
        const noteId = noteData._id;

        try {
            const response = await axiosInstance.put("/edit-note/" + noteId, {
                title,
                content,
                tags,
            });

            if (response.data && response.data.note) {
                showToastMessage("NOTE UPDATED SUCCESSFULLY");
                getAllNotes();
                onClose()
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message)
            }
        }
    };

    const handleAddNote = () => {
        if (!title) {
            setError("Please Enter a title");
            return;
        }

        if (!content) {
            setError("Please Enter a content");
            return;
        }

        setError("");

        if (type === "edit") {
            editNote()
        } else {
            addNewNotes()
        }

    };

    return (
        <div className="relative w-full max-w-xl bg-zinc-900 border border-emerald-600 p-5 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.4)] text-white">

            {/* Close Button */}
            <button
                className="absolute top-3 right-3 p-2 rounded-md bg-emerald-600 hover:bg-emerald-500 transition shadow shadow-emerald-400/30 text-white"
                onClick={onClose}
            >
                <MdClose className="text-xl" />
            </button>

            {/* Title Field */}
            <div className="flex flex-col gap-1 mb-4 mt-2">
                <label className="text-sm font-medium text-zinc-300">TITLE</label>
                <input
                    type="text"
                    className="text-lg bg-zinc-800 text-white border border-zinc-600 rounded px-3 py-2 focus:outline-none focus:border-emerald-500"
                    placeholder="Eg:Go to gym"
                    value={title}
                    onChange={({ target }) => setTitle(target.value)}
                />
            </div>

            {/* Content Field */}
            <div className="flex flex-col gap-1 mb-4">
                <label className="text-sm font-medium text-zinc-300">CONTENT</label>
                <textarea
                    className="bg-zinc-800 text-white border border-zinc-600 rounded px-3 py-2 focus:outline-none focus:border-emerald-500"
                    placeholder="Write your note here..."
                    rows={4}
                    value={content}
                    onChange={({ target }) => setContent(target.value)}
                ></textarea>
            </div>

            {/* Tags Field */}
            <div className="flex flex-col gap-1 mb-6">
                <label className="text-sm font-medium text-zinc-300">TAGS</label>
                <TagInput tags={tags} setTags={setTags} />
            </div>

            {error && <p className="text-red-500 text-xs pt-4">{error}</p>}

            {/* Add Button */}
            <div className="text-right">
                <button
                    className="w-full h-10 bg-emerald-600 text-white rounded hover:bg-emerald-500 transition shadow shadow-emerald-400/30"
                    onClick={handleAddNote}>
                    {type === 'edit' ? 'UPDATE' : 'ADD'}
                </button>
            </div>
        </div>
    );
};

export default AddEditNotes;
