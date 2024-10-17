const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Serve static files (if you have any other assets like images or CSS in a "public" folder, serve them)
app.use(express.static(__dirname));

// Routes
const staffRoutes = require('./routes/staff');
app.use('/api/staff', staffRoutes);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Serve the index.html file from root
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
