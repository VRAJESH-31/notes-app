import React,{useState} from 'react';
import Navbar from '../components/Navbar';
import NoteCard from '../components/NoteCard';
import { MdAdd } from 'react-icons/md';
import AddEditNotes from './AddEditNotes';
import Modal from "react-modal";

const Home = () => {
    const [openAddEditModal, setOpenAddEditModal] = useState({
        isShown: false,
        type: "add",
        data: null,
    });
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-800 text-white">
                <Navbar />
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
                    style={{
                        overlay: {
                            backgroundColor: "rgba(0,0,0,0.2)",
                        },
                    }}
                    contentLabel="" 
                    className="w-[40%] max-h-3/4 bg-gradient-to-br from-white via-zinc-950 to-zinc-700 rounded-md mx-auto mt-14 p-5 overflow-scroll" 
                >
                    <AddEditNotes />
                </Modal>
            </div>
        </>
    );
};

export default Home;
