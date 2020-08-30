import i18n from "i18next";

i18n.init({
    resources: {
        en: {
            translation: {
                Navbar: {
                    navbarMainText: 'TestTask for Aionys'
                },
                AddNoteForm: {
                    addNoteButtonText: 'Add Note',
                    addNoteTextAreaPlaceholder: 'Enter your note here',
                    emptyInputMessage:'Empty input field'
                },
                ReduxMessages:{
                    noteAddSuccessfully:'Note is added',
                    noteAddingError:'Note is not added, try again',
                    noteDeleteSuccessfully:'Note is deleted',
                    noteDeleteError:'Error during note deletion',
                    noteUpdatedSuccessfully:'Note is updated',
                    noteUpdatingError:'Error during note update'
                },
                Note:{
                    emptyEditMessage:'Empty edit field'
                },
                Footer:{
                    some:'Some text and copyrights'
                }
            }
        },
        ru: {
            translation: {
                Navbar: {
                    navbarMainText: 'Тестовое задание Aionys'
                },
                AddNoteForm: {
                    addNoteButtonText: 'Добавить заметку',
                    addNoteTextAreaPlaceholder: 'Введите вашу заметку сюда',
                    emptyInputMessage:'Пустое поле ввода'
                },
                ReduxMessages:{
                    noteAddSuccessfully:'Заметка добавлена',
                    noteAddingError:'Заметка не добавлена, попробуйте снова',
                    noteDeleteSuccessfully:'Заметка удалена',
                    noteDeleteError:'Во время удаления заметки произошла ошибка',
                    noteUpdatedSuccessfully:'Заметка обновлена',
                    noteUpdatingError:'Во время обновления произошла ошибка'
                },
                Note:{
                    emptyEditMessage:'Пустое поле редактирования'
                },
                Footer:{
                    some:'Какой-то текст и копирайты'
                }
            }
        }
    },
    lng: "en",
    fallbackLng: "en",


    interpolation: {
        escapeValue: false,
    },

    react: {
        wait: true
    }
});

export default i18n;