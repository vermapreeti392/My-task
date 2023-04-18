const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors')
const getConncetion = require('./connection/conn');
const register = require('./Routes/register');
const login = require('./Routes/login');
const jobs = require('./Routes/jobs');

app.use(cors());
getConncetion();
app.use(express.json());
app.use(register);
app.use(login);
app.use(jobs);

app.get('/', (req,res)=>{
    res.send('hello');
})
app.listen(PORT, ()=>console.log("server is running"))