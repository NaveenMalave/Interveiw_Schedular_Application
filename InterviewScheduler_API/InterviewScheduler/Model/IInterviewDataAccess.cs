namespace InterviewScheduler.Model
{
    public interface IInterviewDataAccess
    {
        int AddCandidates(Candidates candidates);
       List< Candidates> GetByName(string name);
        List<Candidates> GetByEmailid(string email);
       List<Candidates>GetByPhone(string phone);
        void AddInterview(Recruiter recruiter);
        List<Recruiter> GetByDate(DateOnly date);
        List<Recruiter> GetByRounds(int rounds);
        List<Recruiter> GetByInterviewName(string interviewName);
        void UpdateStatus(int id,Recruiter status);
        void UpdateOfferLetterStatus(string status, string offer);
    }
}
