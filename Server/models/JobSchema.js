const mongoose = require('mongoose');
const JobSchema = new mongoose.Schema({
    title: {type: String},
    type: {type: String},
    location: {type: String},
    salary: {type: Number},
    description: {type: String},
    requirements : {type: String},
    subscribers: {type: Number}
}, {timestamps: true})

const jobModel = mongoose.model('JOB', JobSchema );

module.exports = jobModel;