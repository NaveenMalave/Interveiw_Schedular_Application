using InterviewScheduler.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InterviewScheduler.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class GetCandidateController : ControllerBase
    {
        private readonly IInterviewDataAccess dal;
        public GetCandidateController(IInterviewDataAccess dal)
        {
            this.dal = dal;
        }
        [HttpGet]
        [Route("GetByName/{name}")]
        public IActionResult GetByName(string name)
        {
            return Ok(dal.GetByName(name));

        }
        [HttpGet]
        [Route("GetByEmail/{email}")]
        public IActionResult GetByEmail(string email)
        {
            try
            {
                return Ok(dal.GetByEmailid(email));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet]
        [Route("GetByPhone/{phone}")]
        public IActionResult GetByPhone(string phone)
        {
            try
            {
                return Ok(dal.GetByPhone(phone));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
