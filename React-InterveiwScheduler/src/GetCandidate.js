import React, { useState } from 'react';
import axios from 'axios';

const GetCandidate = () => {
  const [searchField, setSearchField] = useState(''); // For input field (phone, email, or name)
  const [candidate, setCandidate] = useState(null); // To store fetched candidate details
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
    setCandidate(null);

    try {
        let url = '';
        const token = localStorage.getItem('token');
        // Choose the correct API endpoint based on the search criteria
        if (searchBy === 'phone') {
           
          url = `http://localhost:5129/api/GetCandidate/GetByPhone/${searchField}`;
        } else if (searchBy === 'emailId') {
          url = `http://localhost:5129/api/GetCandidate/GetByEmail/${searchField}`;
        } else if (searchBy === 'candidateName') {
          url = ` http://localhost:5129/api/GetCandidate/GetByName/${searchField}`;
        }
  
        const response = await axios.get(url,{
            headers:{
             'Authorization' :`Bearer ${token}`
            }
        });
  


      if (response.data) {
        setCandidate(response.data[0]);
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
      <h2>Search Candidate</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label  className="control-label" htmlFor="searchBy">Search By:</label>
          <select
            id="searchBy"
            value={searchBy}
            onChange={handleSearchByChange}
          >
            <option value="phone">Phone</option>
            <option value="emailId">Email</option>
            <option value="candidateName">Name</option>
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

      {candidate && (
        <div style={{ marginTop: '20px' }}>
          <h3>Candidate Details:</h3>
          <p><strong>Candidate Id :</strong>{candidate.candidateId}</p>
          <p><strong>Candidate Name:</strong> {candidate.candidateName}</p>
          <p><strong>Email:</strong> {candidate.emailId}</p>
          <p><strong>Phone:</strong> {candidate.phone}</p>
          <p><strong>Resume:</strong> {candidate.resume ? 'Available' : 'Not available'}</p>
        </div>
      )}
    </div>
  );
};

export default GetCandidate;
