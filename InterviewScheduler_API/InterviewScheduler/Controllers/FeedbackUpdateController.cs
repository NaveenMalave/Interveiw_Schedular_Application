using InterviewScheduler.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InterviewScheduler.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class FeedbackUpdateController : ControllerBase
    {
        private readonly IInterviewDataAccess dal;
        public FeedbackUpdateController(IInterviewDataAccess dal)
        {
            this.dal = dal;
        }
        [HttpPut]
        [Route("UpdateStatus/{id}")]
        public IActionResult UpdateStatus(int id, [FromBody]Recruiter recruiter)
        {
            try
            {
                dal.UpdateStatus(id, recruiter);
                return Ok("Record updated");
            }
            catch (Exception ex)
            {   
                return BadRequest(ex.Message);
            }
        }
    }
}
