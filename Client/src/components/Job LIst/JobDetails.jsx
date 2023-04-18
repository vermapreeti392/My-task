import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Nabvar';
import movie from '../../assets/images.png'
import { MdWatchLater } from 'react-icons/md'
import { MdLocationOn } from 'react-icons/md'
import { MdAttachMoney } from 'react-icons/md'
import { toast } from 'react-toastify';
import './job.css'
export default function JobDetails() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [job, setJob] = useState([]);
    const notifyMsg = () => toast.success("You have applied for this job");
    useEffect(() => {
        fetch(`http://localhost:5000/job/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setJob(data.job)
            }
            )
            .catch(error => console.error(error));
    }, []);
    const handleApply = () => {
        notifyMsg();
        navigate('/')
    }
    return (
        <>
            <Navbar />
            <div className="main-D">
                <div className='contain-D'>
                    <span style={{ marginTop: '10px' }}><img src={movie} alt="" style={{ height: '50px', width: '50px' }} />
                        <h1>{job.title}</h1>
                    </span>
                    <div className='D-mm'>
                        <span><span style={{ marginTop: '5px' }}><MdAttachMoney style={{ color: "gray" }} /></span>{job.salary}</span>
                        <span><span style={{ marginTop: '5px', marginLeft: '10px' }}><MdWatchLater style={{ color: "gray" }} /></span>{job.type}</span>
                        <span><span style={{ marginTop: '5px', marginLeft: '10px' }}><MdLocationOn style={{ color: "gray" }} /></span>{job.location}</span>

                    </div>
                    <div className='btn-D' >
                        <button onClick={handleApply}>EASY APPLY</button>
                    </div>
                    <hr style={{ width: '92%' }} />
                    <div>
                        <h4>About the job</h4>
                        <p>{job.description}</p>
                    </div>
                    <div>
                        <h4>Requirements</h4>
                        <p>{job.requirements}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
