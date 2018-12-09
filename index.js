const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json())
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

const fileRoute = require('./routes/file');
app.use('/file', fileRoute);

app.listen(3000, () => {
    console.log('Server started on port : ' + 3000);
});