using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace InterviewScheduler.Model
{
    [Table("recruiters")]
    public class Recruiter
    {
        [Key]
        [Column("recruiterid")]
        public int RecruiterId {  get; set; }
        [Column("date")]
        public DateOnly Date {  get; set; }
        [Column("time")]
        public TimeOnly Time { get; set; }
        [Column("rounds")]
        public int Rounds { get; set; }
        [Column("name")]
        public string Name {  get; set; }
        [Column("designation")]
        public string Designation { get; set; }
        [Column("emailid")]
        public string EmailId {  get; set; }
        [Column("status")]
        public string InterviewStatus {  get; set; }
        [Column("recomendeddesignation")]
        public string RecomendedDesignation {  get; set; }
        [Column("remarks")]
        public string Remarks { get; set; }
        [Column("offerletterstatus")]
        public string offerLetterStatus { get; set; }

        [Column("candidateid")]
        [ForeignKey("CandidateId")]
        public int CandidateId {  get; set; }

        //public Candidates candidate { get; set; }



    }
}
