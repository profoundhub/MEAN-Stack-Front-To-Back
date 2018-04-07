const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

// Port Number
const port = 3000;

// Start Server
app.listen(port, () => {
    console.log('Server started on port ' + port);
}); 