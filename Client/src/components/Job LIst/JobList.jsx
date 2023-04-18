import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import './job.css'
import Navbar from './Nabvar';
import { useNavigate } from 'react-router-dom';
const JobList = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [salaryFilter, setSalaryFilter] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/job')
      .then(response => response.json())
      .then(data => {
        console.log(data.job);
        setJobs(data.job)
      })
      .catch(error => console.error(error));
  }, []);

  const filteredJobs = jobs.filter(job => {
    if (searchTerm && !job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    if (locationFilter && job.location.toLowerCase() !== locationFilter.toLowerCase()) {
      return false;
    }
    if (salaryFilter && (job.salaryMin < salaryFilter || job.salaryMax > salaryFilter)) {
      return false;
    }
    return true;
  });


  const handleSearch = event => {
    setSearchTerm(event.target.value);

  };

  const handleLocationFilter = event => {
    setLocationFilter(event.target.value);

  };

  const handleSalaryFilter = event => {
    setSalaryFilter(parseInt(event.target.value));

  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setLocationFilter('');
    setSalaryFilter('');

  };
  const handleApply = (id) => {
    navigate(`/job/${id}`)
  }

  return (
    <>
      <Navbar />
      <div className="job-list-container">
        <div className="filters">
          <label>
            Search:
            <input type="text" value={searchTerm} onChange={handleSearch} />
          </label>
          <label>
            Location:
            <select value={locationFilter} onChange={handleLocationFilter}>
              <option value="">All Locations</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Onsite">Onsite</option>
            </select>
          </label>
          <label>
            Salary Range:
            <select value={salaryFilter} onChange={handleSalaryFilter}>
              <option value="">All Salaries</option>
              <option value="50000">Less than 50000</option>
              <option value="100000">50000 - 100000</option>
              <option value="150000">100000 - 150000</option>
              <option value="200000">More than 150000</option>
            </select>
          </label>

          <button className='clrbtn' onClick={handleClearFilters}>Clear Filters</button>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search Jobs" value={searchTerm} onChange={handleSearch} />
        </div>
        <div className="main">
          {filteredJobs.map(job => (
            <div onClick={() => { handleApply(job._id) }}>
              <JobCard
                key={job._id} job={job}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobList;
