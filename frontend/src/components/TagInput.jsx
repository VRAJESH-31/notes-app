import React, { useState } from 'react';
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags }) => {
    const [inputvalue, setInputvalue] = useState("");

    const handleInputChange = (e) => {
        setInputvalue(e.target.value);
    };

    const addNewTag = () => {
        if (inputvalue.trim() !== "") {
            setTags([...tags, inputvalue.trim()]);
            setInputvalue("");
        }
    };

    const handleKeydown = (e) => {
        if (e.key === "Enter") {
            addNewTag();
        }
    };

    const handleRemoveTag = (tagToRemove) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
    };

    return (
        <div className="mt-4">
            {/* Tag badges */}
            {tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="flex items-center gap-1 bg-zinc-700 text-white text-xs px-2 py-1 rounded-full"
                        >
                            #{tag}
                            <button onClick={() => handleRemoveTag(tag)}>
                                <MdClose className="text-sm hover:text-red-400 transition" />
                            </button>
                        </span>
                    ))}
                </div>
            )}

            {/* Input box */}
            <div className="flex items-center gap-3">
                <input
                    type="text"
                    value={inputvalue}
                    className="text-xl bg-zinc-900 text-white border border-zinc-600 rounded px-4 py-2 focus:outline-none focus:border-emerald-500 flex-1"
                    placeholder="Add tags"
                    onChange={handleInputChange}
                    onKeyDown={handleKeydown}
                />
                <button
                    className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-500 transition text-white text-sm font-medium shadow shadow-emerald-400/20"
                    onClick={addNewTag}
                >
                    <MdAdd className="text-xl" />
                </button>
            </div>
        </div>
    );
};

export default TagInput;
