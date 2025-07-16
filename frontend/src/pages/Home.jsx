import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import NoteCard from '../components/NoteCard';
import { MdAdd } from 'react-icons/md';
import AddEditNotes from './AddEditNotes';
import { useNavigate } from 'react-router-dom';
import Modal from "react-modal";
import axiosInstance from '../utils/axiosInstance';
import Toast from '../components/Toast';
import EmptyCard from '../components/EmptyCard';
import no_data from '../assets/images/no_data.svg';
import no_search from '../assets/images/no_search.svg';


const Home = () => {
    const [openAddEditModal, setOpenAddEditModal] = useState({
        isShown: false,
        type: "add",
        data: null,
    });

    const [showToastmsg, setShowToastmsg] = useState({
        isShown: false,
        message: "",
        type: "add",
    });

    const [allNotes, setAllNotes] = useState([]);
    const [userInfo, setUserInfo] = useState(null);

    const [isSearch, setIsSearch] = useState(false);

    const navigate = useNavigate();

    const handleEdit = (noteDetails) => {
        setOpenAddEditModal({ isShown: true, data: noteDetails, type: "edit" });
    };

    const showToastMessage = (message, type) => {
        setShowToastmsg({ isShown: true, message, type, });
    };

    const handleCloseToast = () => {
        setShowToastmsg({ isShown: false, message: "", });
    };

    //get User info
    const getUserInfo = async () => {
        try {
            const response = await axiosInstance.get("/get-user");
            if (response.data && response.data.user) {
                setUserInfo(response.data.user);
            }
        } catch (error) {
            if (error.response.status === 401) {
                localStorage.clear();
                navigate("/login");
            }
        };
    };

    // get all note
    const getAllNotes = async () => {
        try {
            const response = await axiosInstance.get("/get-all-notes");

            if (response.data && response.data.notes) {
                setAllNotes(response.data.notes);
            }
        } catch (error) {
            console.log("An unexpected error occured.");
        }
    };

    //delete note
    const deleteNote = async (data) => {
        const noteId = data._id;
        try {
            const response = await axiosInstance.delete("/delete-note/" + noteId,);

            if (response.data && !response.data.error) {
                showToastMessage("NOTE DELETED SUCCESSFULLY", "delete");
                getAllNotes();
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                console.log("An unexpected error occured.");
            }
        }
    };

    //Search note
    const onSearchNote = async (query) =>{
        try{
            const response =await axiosInstance.get("/search-note",{
                params:{query},
            });

            if(response.data && response.data.notes){
                setIsSearch(true);
                setAllNotes(response.data.notes);
            }

        }catch(error){
        console.log(error);
    }
    };

    //Pinned update
    const updateIsPinned = async (note) => {
    const noteId = note._id;

    try {
        const response = await axiosInstance.put("/update-note-pinned/" + noteId, {
            isPinned: !note.isPinned, // toggle the pin
        });

        if (response.data && response.data.note) {
            showToastMessage("NOTE PIN STATUS UPDATED", "update");
            getAllNotes();
        }
    } catch (error) {
        console.log("Error updating pin:", error);
    }
};
    

    const handleClearSearch = async (query) =>{
        setIsSearch(false);
        getAllNotes();
    };

    useEffect(() => {
        getAllNotes();
        getUserInfo();
        return () => { };
    }, []);

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-800  text-white">
                <Navbar userInfo={userInfo} onSearchNote={onSearchNote} handleClearSearch={handleClearSearch} />
                {allNotes.length > 0 ? <div className="container mx-auto px-4 py-6 grid grid-cols-3 gap-4 mt-8">
                    {allNotes.map((item, index) => (
                        <NoteCard
                            key={item._id}
                            title={item.title}
                            date={item.createdOn}
                            content={item.content}
                            tags={item.tags}
                            isPinned={item.isPinned}
                            onEdit={() => handleEdit(item)}
                            onDelete={() => deleteNote(item)}
                            onPinNote={() => updateIsPinned(item)}
                        />
                    ))}
                </div> : <EmptyCard imgSrc={isSearch ? no_search : no_data} message={isSearch ? `Oops! No data found`:`Start Creating Your First Note! Click 'Add' button and Let's Get Started! `} />}


                <button
                    className="w-16 h-16 fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-400/10 text-white transition duration-300"
                    onClick={() => {
                        setOpenAddEditModal({ isShown: true, type: "add", data: null });

                    }}
                >
                    <MdAdd className="text-3xl" />
                </button>

                <Modal
                    isOpen={openAddEditModal.isShown}
                    onRequestClose={() => { }}
                    appElement={document.getElementById('root')}
                    style={{
                        overlay: {
                            backgroundColor: "rgba(0,0,0,0.2)",
                        },
                    }}
                    contentLabel=""
                    className="w-[500px] max-h-[70vh] mx-auto mt-20 p-6 rounded-xl bg-zinc-900 border border-emerald-500 shadow-[0_0_25px_rgba(34,197,94,0.6)] overflow-hidden transition-all duration-300"
                >
                    <AddEditNotes
                        type={openAddEditModal.type}
                        noteData={openAddEditModal.data}
                        onClose={() => {
                            setOpenAddEditModal({ isShown: false, type: "add", data: null });
                        }}
                        getAllNotes={getAllNotes}
                        showToastMessage={showToastMessage}
                    />
                </Modal>

                <Toast
                    isShown={showToastmsg.isShown}
                    message={showToastmsg.message}
                    type={showToastmsg.type}
                    onClose={handleCloseToast}
                />
            </div>
        </>
    );
};


export default Home;
