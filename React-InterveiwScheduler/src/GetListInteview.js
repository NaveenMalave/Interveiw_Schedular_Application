import React, { useState } from 'react';
import axios from 'axios';

const GetListInterview = () => {
  const [searchField, setSearchField] = useState(''); // For input field (phone, email, or name)
  const [scheduleI, setScheduleI] = useState(null); // To store fetched candidate details
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchBy, setSearchBy] = useState('phone'); // Default search by phone

  const handleSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleSearchByChange = (e) => {
    setSearchBy(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!searchField) {
      setError('Please enter a value to search');
      return;
    }

    setLoading(true);
    setError('');
    setScheduleI(null);

    try {
        let url = '';
        const token = localStorage.getItem('token');
        // Choose the correct API endpoint based on the search criteria
        if (searchBy === 'date') {
           
          url = `http://localhost:5129/api/ListInterview/GetByDate/${searchField}`;
        } else if (searchBy === 'rounds') {
          url = `http://localhost:5129/api/ListInterview/GetByRound/${searchField}`;
        } else if (searchBy === 'name') {
          url = `http://localhost:5129/api/ListInterview/GetByIntName/${searchField}`;
        }
  
        const response = await axios.get(url,{
            headers:{
             'Authorization' :`Bearer ${token}`
            }
        });
  


      if (response.data) {
        setScheduleI(response.data[0]);
        console.log(response.data)
      } else {
        setError('No candidate found');
      }
    } catch (err) {
      setError('Error fetching candidate details');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Search List</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label  className="control-label" htmlFor="searchBy">Search By:</label>
          <select
            id="searchBy"
            value={searchBy}
            onChange={handleSearchByChange}
          >
            <option value="date">date</option>
            <option value="rounds">rounds</option>
            <option value="name">Name</option>
          </select>
        </div>
      
        <div>
          <label htmlFor="searchField">Enter {searchBy}:</label>
          <input class="form-control"
            type="text"
            id="searchField"
            value={searchField}
            onChange={handleSearchChange}
            required
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button className='btn btn-info' type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Find'}
        </button>
      </form>

      {scheduleI && (
        <div style={{ marginTop: '20px' }}>
          <h3>Interview Details:</h3>
          <p><strong>Recruiter Id :</strong>{scheduleI.recruiterId}</p>
          <p><strong>Designation Name :</strong> {scheduleI.designation}</p>
          <p><strong>Recruiter Name :</strong>{scheduleI.name}</p>
          <p><strong>Email Id</strong> {scheduleI.emailId}</p>
          <p><strong>InterviewStatus</strong> {scheduleI.interviewStatus}</p>
          <p><strong>RecommendedDesignation :</strong> {scheduleI.recomendedDesignation}</p>
          <p><strong>offerLetterStatus:</strong> {scheduleI.offerLetterStatus}</p>
          <p><strong>CandidateId:</strong> {scheduleI.candidateId}</p>
        </div>
      )}
    </div>
  );
};

export default GetListInterview;
