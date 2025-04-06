using InterviewScheduler.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InterviewScheduler.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ListInterviewController : ControllerBase
    {
        private readonly IInterviewDataAccess dal;
        public ListInterviewController(IInterviewDataAccess dal)
        {
            this.dal = dal;
        }
        [HttpGet]
        [Route("GetByDate/{date}")]
        public IActionResult GetBydate(DateOnly date)
        {
            try
            {
                return Ok(dal.GetByDate(date));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
        [HttpGet]
        [Route("GetByRound/{round}")]
        public IActionResult GetByRound(int round)
        {
            try
            {
                return Ok(dal.GetByRounds(round));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet]
        [Route("GetByIntName/{interviewName}")]
        public IActionResult GetByIntName(string interviewName)
        {
            try
            {
                return Ok(dal.GetByInterviewName(interviewName));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
    
}
