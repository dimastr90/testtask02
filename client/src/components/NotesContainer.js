import React, {useState} from "react";
import {connect} from "react-redux";
import Note from "./Note";
import Grid from "@material-ui/core/Grid";
import {deleteNote, updateNote} from "../redux/mainReducer";
import Pagination from "@material-ui/lab/Pagination";


const NotesContainer = (props) => {
    const [currentPage, setCurrentPage] = useState(1); //selected page;
    const PER_PAGE = 8; //notes on page;
    const pageAmount = Math.ceil(props.allNotes.length / PER_PAGE); //total amount of pages;

    //on select page;
    const handleChangePage = (e, page) => {
        setCurrentPage(page);
    };

    //create notes list for current page;
    const getData = () => {
        const offset = currentPage === 1 ? 0 : currentPage * PER_PAGE - PER_PAGE;
        const newData = props.allNotes.slice(offset, offset + PER_PAGE);
        if (newData.length === 0) {
            setCurrentPage(currentPage === 1 ? 1 : currentPage - 1);
        }
        return newData;
    };

    return (
        <div className='notesContainer'>
            <Grid container spacing={2}>
                {props.allNotes.length > 0 && getData().map(i => <Note updateNote={props.updateNote}
                                                                       deleteNote={props.deleteNote} key={i._id}
                                                                       _id={i._id} data={i.entry}/>)}
            </Grid>
            <Grid container justify="center" spacing={2}>
                <Grid item>
                    {pageAmount > 1 && <div className='cardListPagination'>
                        <Pagination className='pagination' count={pageAmount} showFirstButton showLastButton onChange={handleChangePage}/>
                    </div>
                    }
                </Grid>
            </Grid>
        </div>
    )
};

const mapStateToProps = state => ({
    allNotes: state.allNotes
});

export default connect(mapStateToProps, {deleteNote, updateNote})(NotesContainer);