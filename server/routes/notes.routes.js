const {Router} = require('express');
const db = require('../fake_db/fakeDB')();
const router = Router();


router.get('/notes', async (req, res) => {
    try {
        const data = await db.getAll();

        res.status(200).json(data);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
});


router.get('/notes/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await db.getOne(id);

        res.status(200).json(data);
    } catch (e) {
        res.status(404).json({message: e.message});
    }
});


router.post('/notes', async (req, res) => {
    try {
        const {data} = req.body;
        await db.add(data);

        res.status(201).json({message: 'Note is created successfully'});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
});


router.put('/notes/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const {data} = req.body;
        await db.updateOne(id,data);

        res.status(202).json({message: 'Note is updated'});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
});


router.delete('/notes/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await db.deleteOne(id);

        res.status(200).json({message:'Entry is deleted'});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
});


module.exports = router;
