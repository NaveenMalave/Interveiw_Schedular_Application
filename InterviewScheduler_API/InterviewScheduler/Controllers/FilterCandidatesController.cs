using InterviewScheduler.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InterviewScheduler.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class FilterCandidatesController : ControllerBase
    {
        private readonly IInterviewDataAccess dal;
        public FilterCandidatesController(IInterviewDataAccess dal)
        {
            this.dal = dal;
        }

        [HttpPut]
        [Route("UpdatOfferLetter/{Name}/{offerLetterStatus}")]
        public IActionResult UpdateOfferLetter(string Name, string offerLetterStatus)
        {
            try
            {
                dal.UpdateOfferLetterStatus(Name, offerLetterStatus);
                return Ok("Record Updated");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
