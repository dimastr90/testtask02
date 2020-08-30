const fs = require('fs').promises;
const {v1: uuid} = require('uuid');
const path = require('path');

const DATABASE_PATH = path.join(__dirname, 'database.json'); //path to db storage file;

const Database = () => {
    //adding new entry to db;
    const add = async (entry) => {
        if (!entry) {
            throw new Error('Trying to add empty entry to db');
        }
        try {
            const uniqId = uuid();
            const data = await fs.readFile(DATABASE_PATH);
            const parsedData = JSON.parse(data);
            parsedData.push({_id: uniqId, entry});
            await fs.writeFile(DATABASE_PATH, JSON.stringify(parsedData));

        } catch (e) {
            console.warn('Some troubles with reading/saving file');
            throw e;
        }
    };

    //get entry by id;
    const getOne = async (id) => {
        if (!id) {
            throw new Error('Not valid ID');
        }
        try {
            const data = await fs.readFile(DATABASE_PATH);
            const parsedData = JSON.parse(data);
            for (let i of parsedData) {
                if (i._id === id) {
                    return i;
                }
            }
        } catch (e) {
            console.warn('Some troubles with searching in file');
            throw e;
        }
    };

    //get all notes;
    const getAll = async () => {
        try {
            const data = await fs.readFile(DATABASE_PATH);
            const parsedData = JSON.parse(data);
            return parsedData;
        } catch (e) {
            console.warn('Some troubles with getting all entries');
            throw e;
        }
    };

    //update entry by id
    const updateOne = async (id, newData) => {
        if (!id) {
            throw new Error('Not valid ID');
        }
        try {
            const data = await fs.readFile(DATABASE_PATH);
            const parsedData = JSON.parse(data);
            for (let i of parsedData) {
                if (i._id === id) {
                    i.entry = newData;
                    await fs.writeFile(DATABASE_PATH, JSON.stringify(parsedData));
                    break;
                }
            }
        } catch (e) {
            console.warn('Some troubles with updating entry');
            throw e;
        }
    };

    //delete entry by id;
    const deleteOne = async (id) => {
        if (!id) {
            throw new Error('Not valid ID');
        }
        try {
            const data = await fs.readFile(DATABASE_PATH);
            const parsedData = JSON.parse(data);
            for (let i = 0; i < parsedData.length; i++) {
                if (parsedData[i]._id === id) {
                    parsedData.splice(i, 1);
                    await fs.writeFile(DATABASE_PATH, JSON.stringify(parsedData));
                    break;
                }
            }
        } catch (e) {
            console.warn('Some troubles with deleting entry');
            throw e;
        }
    };

    return {deleteOne, updateOne, getAll, getOne, add};
};

module.exports = Database;