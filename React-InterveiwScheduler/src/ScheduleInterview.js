import React, { useState } from 'react';
import axios from 'axios';

const ScheduleInterview = () => {
  
    const [recruiterId,setRecruiterId]=useState('');
    const [date,setDate]=useState('');
    const [time,settime]=useState('');
    const [rounds,setRounds]=useState('');
    const [name,setName]=useState('');
    const [designation,setDesignation]=useState('');
    const [emailId,setEmailId]=useState('');
    const [interviewStatus,setinterviewStatus]=useState('');
    const [recomendedDesignation,setRecommendedDesignation]=useState('');
    const [remarks,setRemarks]=useState('');
    const [offerLetterStatus,setOfferLetterStatus]=useState('');
    const [candidateId,setCandidateId]=useState('');
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState('');

  
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
        const formData=new FormData();
        formData.append('recruiterId',recruiterId);
        formData.append('date',date);
        formData.append('time',time);
        formData.append('rounds',rounds);
        formData.append('name',name);
        formData.append('designation',designation);
        formData.append('emailId',emailId);
        formData.append('interviewStatus',interviewStatus);
        formData.append('recomendedDesignation',recomendedDesignation);
        formData.append('remarks',remarks);
        formData.append('offerLetterStatus',offerLetterStatus);
        formData.append('candidateId',candidateId);
      // if (!formData.recruiterId || !formData.date || !formData.time || !formData.candidateId) {
      // setError('Please fill in all required fields.');
      // return;
      
    try {
      setLoading(true);
    setError('');
    setSuccessMessage('');
        const token = localStorage.getItem('token');

        // const formDataToSend = new FormData();
        // for (const [key, value] of Object.entries(formData)) {
        //   formDataToSend.append(key, value);
        // }
      const response = await axios.post('http://localhost:5129/api/ScheduleInterview', formData,{
        headers: {
            'Content-Type': 'application/json' ,
            // 'Content-Type': 'multipart/form-data',
            Authorization :`Bearer ${token}`
          },
      });
      console.log(formData);
      // If the request is successful
      if (response.status === 200) {
        setSuccessMessage('Interview details submitted successfully!');
        console.log('Response:', response.data);
      }
      
    } catch (error) {
      // setError('Failed to submit interview details.');
      if (error.response) {
        console.error("Error response data:", error.response.data);  // Log error data
        setError(`Error: ${error.response.data.message || 'Failed to submit interview details.'}`);
      } else if (error.request) {
        setError('No response from server.');
      } else {
        setError('Failed to submit interview details.');
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Interview Form</h2>
      
      <form onSubmit={handleSubmit}>
        
        <div>
          <label htmlFor="recruiterId">Recruiter ID:</label>
          <input class="form-control"
            type="number"
            id="recruiterId"
            name="recruiterId"
            value={recruiterId}
             onChange={(e) => setRecruiterId(e.target.value)}
            required
          />
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date">Date:</label>
          <input class="form-control"
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        {/* Time */}
        <div>
          <label htmlFor="time">Time:</label>
          <input class="form-control"
            type="text"
            id="time"
            name="time"
            value={time}
            onChange={(e) => settime(e.target.value)}
            required
          />
        </div>

        {/* Rounds */}
        <div>
          <label htmlFor="rounds">Rounds:</label>
          <input class="form-control"
            type="number"
            id="rounds"
            name="rounds"
            value={rounds}
            onChange={(e) => setRounds(e.target.value)}
          />
        </div>

        {/* Name */}
        <div>
          <label htmlFor="name">Name:</label>
          <input class="form-control"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Designation */}
        <div>
          <label htmlFor="designation">Designation:</label>
          <input class="form-control"
            type="text"
            id="designation"
            name="designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </div>

        {/* Email ID */}
        <div>
          <label htmlFor="emailId">Email ID:</label>
          <input class="form-control"
            type="text"
            id="emailId"
            name="emailId"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="interviewStatus">Interview Status:</label>
          <input class="form-control"
            type="text"
            id="interviewStatus"
            name="interviewStatus"
            value={interviewStatus}
            onChange={(e) => setinterviewStatus(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="recommendedDesignation">Recommended Designation:</label>
          <input class="form-control"
            type="text"
            id="recommendedDesignation"
            name="recommendedDesignation"
            value={recomendedDesignation}
            onChange={(e) => setRecommendedDesignation(e.target.value)}
          />
        </div>

                <div>
          <label htmlFor="remarks">Remarks:</label>
          <input  class="form-control"
          type="text"
            id="remarks"
            name="remarks"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />
        </div>

              <div>
          <label htmlFor="offerLetterStatus">Offer Letter Status:</label>
          <input class="form-control"
            type="text"
            id="offerLetterStatus"
            name="offerLetterStatus"
            value={offerLetterStatus}
            onChange={(e) => setOfferLetterStatus(e.target.value)}
          />
        </div>

              <div>
          <label htmlFor="candidateId">Candidate ID:</label>
          <input class="form-control"
            type="number"
            id="candidateId"
            name="candidateId"
            value={candidateId}
            onChange={(e) => setCandidateId(e.target.value)}
            required
          />
        </div>

               {error && <p style={{ color: 'red' }}>{error}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

               <button type="submit" className="btn btn-info" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ScheduleInterview;
