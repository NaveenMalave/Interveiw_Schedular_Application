import { Component, useState } from "react";
import axios from 'axios';


const AddCandidate=()=>{
    const [candidateid,setCandidateid]=useState('');
    const [candidateName, setCandidateName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [phone, setPhone] = useState('');
    const [resumeFile, setResumeFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setResumeFile(file);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('candidateid',candidateid)
        formData.append('candidateName', candidateName);
        formData.append('emailId', emailId);
        formData.append('phone', phone);
        if (resumeFile) {
          formData.append('resumeFile', resumeFile);
        }
    
        try {
          setLoading(true);
          setError('');
          setSuccessMessage('');
    
         const token = localStorage.getItem('token');
          const response = await axios.post('http://localhost:5129/api/CandidateInput/AddCandidate', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization' :`Bearer ${token}`
            },
          });
    
          setSuccessMessage('Candidate submitted successfully!');
          console.log('Response:', response.data);
        } catch (err) {
          setError('Error submitting form. Please try again.');
          console.error('Error:', err);
        } finally {
          setLoading(false);
        }
      };
        return(
   <div>
    <h2>Add Candidates</h2>
    <form onSubmit={handleSubmit}>
    <div>
          <label className="control-label" htmlFor="candidateid">Candidate Id:</label>
          <input class="form-control"
            type="number"
            id="candidateid"
            value={candidateid}
            onChange={(e) => setCandidateid(e.target.value)}
            required
          />
        </div>
        <div>
          <label  className="control-label" htmlFor="candidateName">Candidate Name:</label>
          <input class="form-control"
            type="text"
            id="candidateName"
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="control-label" htmlFor="emailId">Email:</label>
          <input class="form-control"
            type="text"
            id="emailId"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            required
          />
        </div>

        <div>
          <label  className="control-label" htmlFor="phone">Phone:</label>
          <input class="form-control"
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div>
          <label  className="control-label" htmlFor="resumeFile">Resume (Upload as file):</label>
          <input class="form-control"
            type="file"
            id="resumeFile"
            accept=".pdf, .docx, .doc,.jpg"
            onChange={handleFileChange}
            required
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

        <button className="btn btn-info" type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
</div>
     );
}

export default AddCandidate;