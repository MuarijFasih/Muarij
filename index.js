const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/products/:id', (req, res, next) => {
    res.json({msg: 'This is cors-enabled for all origins'})

});

app.listen(50, () => {
    console.log('listening at port: 50');
});
