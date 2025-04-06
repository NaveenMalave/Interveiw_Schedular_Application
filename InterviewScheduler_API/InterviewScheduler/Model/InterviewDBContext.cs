using Microsoft.EntityFrameworkCore;

namespace InterviewScheduler.Model
{
    public class InterviewDbContext:DbContext
    {
        public InterviewDbContext(DbContextOptions<InterviewDbContext> options) : base(options) { }

        public DbSet<Candidates> Candidates { get; set; }
        public DbSet<Recruiter> Recruiters { get; set; }
    }
}
