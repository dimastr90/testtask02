import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {toast} from "react-toastify";
import TextareaAutosize from "@material-ui/core/TextareaAutosize/TextareaAutosize";
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import i18n from "../i18n/i18n";

const Note = (props) => {
    const [editMode, setEditMode] = useState(false); //edit or view mode?;
    const [data, setData] = useState(props.data); //text in editMode textarea;
    const id = props._id; //current note id;
    const initialData = props.data; //note copy, for restore on update cancel;

    //on delete button click;
    const deleteItemHandler = async () => {
        const message = await props.deleteNote(id);
        toast.dark(message);
    };

    //on edit button click;
    const editButtonHandler = () => {
        setEditMode(true);
    };

    //on textarea change in edit mode;
    const changeDataHandler = (e) => {
        setData(e.target.value);
    };

    //on cancel button click. Restore all changes to default;
    const cancelEditHandler = () => {
        setData(initialData);
        setEditMode(false);
    };

    //on accept button click. Check and update;
    const acceptEditHandler = async () => {
        if (!data) {
            toast.info(i18n.t('Note.emptyEditMessage'))
        } else {
            if (data !== initialData) {
                const message = await props.updateNote(id, data);
                toast.dark(message);
            }
            setEditMode(false);
        }
    };

    if (!editMode) {
        return (
            <Grid item xs={12} md={4} lg={3}>
                <div className='note'>
                    <div className='noteButtons'>
                        <IconButton aria-label="edit" onClick={editButtonHandler}>
                            <EditIcon/>
                        </IconButton>
                        <IconButton aria-label="delete" onClick={deleteItemHandler}>
                            <DeleteForeverIcon/>
                        </IconButton>
                    </div>

                    <pre data-cy='note-preview'>{props.data}</pre>
                </div>
            </Grid>
        )
    } else {
        return (
            <Grid item xs={12} md={4} lg={3}>
                <div className='note-edit'>
                    <div className='noteEditButtons'>
                        <IconButton aria-label="edit" onClick={acceptEditHandler}>
                            <DoneOutlineIcon/>
                        </IconButton>
                        <IconButton aria-label="delete" onClick={cancelEditHandler}>
                            <CancelIcon/>
                        </IconButton>
                    </div>

                    <TextareaAutosize className='noteChangeTextArea'
                                      rowsMin={4}
                                      onChange={changeDataHandler}
                                      value={data}/>
                </div>
            </Grid>
        )
    }
};


export default Note;

