import React, {useState} from "react";
import {connect} from "react-redux";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';
import i18n from "../i18n/i18n";
import {addNewNote} from "../redux/mainReducer";
import {toast} from "react-toastify";


const AddNoteForm = (props) => {
    //current textarea text;
    const [addNoteText, setAddNoteText] = useState('');

    //on textarea change;
    const noteTextHandleChange = (e) => {
        setAddNoteText(e.target.value);
    };

    //handler for "Add Note" button;
    const addNoteHandler = async () => {
        if(addNoteText.trim().length<1){
            toast.info(i18n.t('AddNoteForm.emptyInputMessage'))
        }else{
            const message = await props.addNewNote(addNoteText);
            toast.dark(message);
            setAddNoteText('');
        }
    };

    return (
        <div className='addNoteForm'>
            <Grid container justify='center'>
                <Grid item xs={12}>
                    <div className='textArea'>
                        <TextareaAutosize className='textAreaComponent' onChange={noteTextHandleChange}
                                          data-cy='addTextArea'
                                          value={addNoteText}
                                          rowsMin={5} placeholder={i18n.t('AddNoteForm.addNoteTextAreaPlaceholder')}/>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className='addNoteButton'>
                        <Button
                            variant="contained"
                            color="primary"
                            data-cy='addButton'
                            endIcon={<SendIcon/>}
                            onClick={addNoteHandler}
                        >
                            {i18n.t('AddNoteForm.addNoteButtonText')}
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
};


const mapStateToProps = state => ({
    selectedLanguage: state.selectedLanguage
});

export default connect(mapStateToProps, {addNewNote})(AddNoteForm);