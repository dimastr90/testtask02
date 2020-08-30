const express = require('express');
const config = require('config');
const app = express();

const PORT = config.get('port') || 5001;

app.use(express.json({ extended: true }));
app.use(require('./routes/notes.routes'));

app.listen(PORT, () => console.log(`Server is started on ${PORT}`));