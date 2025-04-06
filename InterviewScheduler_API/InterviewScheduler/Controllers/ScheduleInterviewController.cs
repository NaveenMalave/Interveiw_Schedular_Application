using InterviewScheduler.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InterviewScheduler.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ScheduleInterviewController : ControllerBase
    {
        private readonly IInterviewDataAccess dal;
        public ScheduleInterviewController(IInterviewDataAccess dal)
        {
            this.dal = dal;
        }
        [HttpPost]
        public IActionResult ScheduleInterview([FromBody] Recruiter recruiter)
        {
            try
            {
                dal.AddInterview(recruiter);
                return Ok(new { msg = "Interview is Scheduled" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
