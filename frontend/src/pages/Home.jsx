import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import NoteCard from '../components/NoteCard';
import { MdAdd } from 'react-icons/md';
import AddEditNotes from './AddEditNotes';
import { useNavigate } from 'react-router-dom';
import Modal from "react-modal";
import axiosInstance from '../utils/axiosInstance';

const Home = () => {
    const [openAddEditModal, setOpenAddEditModal] = useState({
        isShown: false,
        type: "add",
        data: null,
    });

    const [userInfo, setUserInfo] = useState(null);

    const navigate = useNavigate();

    //get User info
    const getUserInfo = async () => {
        try{
            const response = await axiosInstance.get("/get-user");
            if(response.data && response.data.user){
                setUserInfo(response.data.user);
            }
        } catch(error){
            if(error.response.status === 401) {
                localStorage.clear();
                navigate("/login");
            }
        }
    };

    
    useEffect(() => {
        getUserInfo();
        return() => {};
    },[]);

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-800  text-white">
                <Navbar userInfo={userInfo}/>
                <div className="container mx-auto px-4 py-6 grid grid-cols-3 gap-4 mt-8">
                    <NoteCard
                        title="Meeting on 7th April"
                        date="3rd Apr 2025"
                        content="Don't forget to prepare slides and update the agenda before the meeting starts"
                        tags="#meeting"
                        isPinned={true}
                        onEdit={() => { }}
                        onDelete={() => { }}
                        onPinNote={() => { }}
                    />
                </div>


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
                    />
                </Modal>


            </div>
        </>
    );
};

export default Home;
