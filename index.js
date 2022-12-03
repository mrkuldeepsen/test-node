const express = require('express');
const bodyParser = require('body-parser');
const Parse = require('parse')




const cors = require('cors');
const app = express()

app.use(cors());
app.use(bodyParser.json());

app.get('*', function (req, res) {
    res.status(404).send('Huhhh smart!');
});

const port = process.env.PORT || 8050

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});