require('dotenv').config();
const express = require('express')
const app = express()
const cors = require('cors')
const userRoutes = require('./routes/index');
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.use('/api/', userRoutes);


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))