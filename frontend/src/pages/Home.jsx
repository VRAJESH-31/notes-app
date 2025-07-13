import React from 'react';
import Navbar from '../components/Navbar';
import NoteCard from '../components/NoteCard';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-6">
                <NoteCard
                    title="Meeting on 7th April"
                    date="3rd Apr 2025"
                    content="Don't forget to prepare slides and update the agenda before the meeting starts" tags="#meeting"
                    isPinned={true}
                    onEdit={() => { }}
                    onDelete={() => { }}
                    onPinNote={() => { }}
                />
            </div>
        </>
    );
};

export default Home;
