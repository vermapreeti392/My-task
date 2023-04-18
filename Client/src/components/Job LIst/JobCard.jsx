import React from 'react';
import './job.css'
import {MdWatchLater} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'
import {MdAttachMoney} from 'react-icons/md'
import {MdArrowForwardIos} from 'react-icons/md'
import movie from '../../assets/images.png'
const JobCard = ({ job }) => {
    
    return (
        <div className="job-card">            
            <div className="job-card-title">
            <span>
                <img src={movie} alt="" style={{height: '30px', width: '30px'}}/>
                {job.title}
            </span >                
                <span ><MdArrowForwardIos style={{fontSize: '30px'}}/></span></div>
            <div className="job-card-salary">
                <span><MdWatchLater style={{color: "gray"}}/></span>
                {job.type}
                
                </div>
            <div className="job-card-salary">
            <span><MdLocationOn style={{color: "gray"}}/></span>
                {job.salary}</div>
            <div className="job-card-location">
            <span><MdAttachMoney style={{color: "gray"}}/></span>
                {job.location}</div>
        </div>

    );
};

export default JobCard;