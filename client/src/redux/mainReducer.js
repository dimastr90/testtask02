import i18n from "../i18n/i18n";
import {requestToApi} from "../modules/request";


const CHANGE_SELECTED_LANGUAGE = 'CHANGE_SELECTED_LANGUAGE';
const SET_ALL_NOTES = 'SET_ALL_NOTES';

const initialState = {
    selectedLanguage: 'en',
    allNotes: [],
};


const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SELECTED_LANGUAGE:
            return {
                ...state,
                selectedLanguage: action.payload
            };
        case SET_ALL_NOTES:
            return {
                ...state,
                allNotes: action.payload
            };
        default:
            return state;
    }
};


export const changeSelectedLanguage = payload => ({type: CHANGE_SELECTED_LANGUAGE, payload});
export const setAllNotes = payload => ({type: SET_ALL_NOTES, payload});


//changing app language in i18n;
export const changeI18nLanguage = (lang) => (dispatch) => {
    i18n.changeLanguage(lang, (err, t) => {
        if (err) return console.log('something went wrong loading', err)
        dispatch(changeSelectedLanguage(lang));
    });
};

//get all notes from backend;
export const getAllNotesFromBase = () => async (dispatch) => {
    try{
        const notes = await requestToApi('/notes');
        if(notes){
            dispatch(setAllNotes(notes));
        }
    }catch (e) {
        console.warn(e.message);
    }
};

//add new note to server db;
export const addNewNote = (note) => async (dispatch) => {
    try {
        await requestToApi('/notes', 'POST', {data:note});
        dispatch(getAllNotesFromBase());

        return i18n.t('ReduxMessages.noteAddSuccessfully')
    } catch (e) {
        return i18n.t('ReduxMessages.noteAddingError')
    }
};

//delete note from db;
export const deleteNote = (id) => async (dispatch) => {
    try {
        await requestToApi('/notes/'+id, 'DELETE');
        dispatch(getAllNotesFromBase());

        return i18n.t('ReduxMessages.noteDeleteSuccessfully')
    } catch (e) {
        return i18n.t('ReduxMessages.noteDeleteError')
    }
};

//update existing note
export const updateNote = (id,note) => async (dispatch) => {
    try {
        await requestToApi('/notes/'+id, 'PUT', {data:note});
        dispatch(getAllNotesFromBase());

        return i18n.t('ReduxMessages.noteUpdatedSuccessfully')
    } catch (e) {
        return i18n.t('ReduxMessages.noteUpdatingError')
    }
};


export default mainReducer;