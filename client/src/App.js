import React, {useEffect} from 'react';
import './App.scss';
import Navbar from "./components/Navbar";
import AddNoteForm from "./components/AddNoteForm";
import Container from "@material-ui/core/Container";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import NotesContainer from "./components/NotesContainer";
import {connect} from "react-redux";
import {getAllNotesFromBase} from "./redux/mainReducer";
import Footer from "./components/Footer";


function App(props) {
    useEffect(() => {
        props.getAllNotesFromBase();
    });

    return (
        <>
            <Navbar/>
            <div className='content'>
                <Container className="mainContainer" maxWidth="lg">
                    <AddNoteForm/>
                    <NotesContainer/>
                </Container>
            </div>
            <Footer/>

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}

export default connect(null, {getAllNotesFromBase})(App);
