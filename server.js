const express = require('express');
const app = express();
const PORT = 8000;
const path = require('path')
// app.get('/', (req, res) => {
//     console.log('Success!')
//     app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, '/index.html'));
// });

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server hosted at port ${PORT}`);
})