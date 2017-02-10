const express = require('express');

var app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server up and running on ${PORT}`);
});
