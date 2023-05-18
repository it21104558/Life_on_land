const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const observationRoutes = require('./routes/observationRoutes');
const floraRoutes = require('./routes/floraRoutes');
const faunaRoutes = require('./routes/faunaRoutes');
const habitatRoutes = require('./routes/habitatRoutes');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://root:071656Ad@cluster0.zekgg7g.mongodb.net/').then(() => {
    console.log("mongo db connected")
}).catch(err => {
    console.log(`mongo db connectign  failed ${err}`)
});

app.use('/api/users', userRoutes);
app.use('/api/observations', observationRoutes);
app.use('/api/flora', floraRoutes);
app.use('/api/fauna', faunaRoutes);
app.use('/api/habitats', habitatRoutes);


app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
