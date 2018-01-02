const express = require('express');

const app = express();

app.get('/api/custumers', (req, res) => {

    const custumers = [
        { id: 1, firstName: 'Andrei', lastName: 'Margineanu' },
        { id: 2, firstName: 'Slavic', lastName: 'Caisin' },
        { id: 3, firstName: 'Sorin', lastName: 'Hadjiu' }
    ];

    res.json(custumers);

});

const port = 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port} !`);
});