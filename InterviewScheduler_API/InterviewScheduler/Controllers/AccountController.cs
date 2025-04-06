using System.IdentityModel.Tokens.Jwt;
using System.Text;
using InterviewScheduler.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace InterviewScheduler.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : Controller
    {
        private readonly IConfiguration _config;
        public AccountController(IConfiguration config)
        {
            this._config = config;
        }

        [HttpPost]
        [Route("login")]
        public IActionResult Login(UserDetails user)
        {
            if (user.UserName == "admin" && user.password == "admin")
            {
                //generate token
                var secretKey = _config["jwt:secretKey"];
                var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));

                var tokenParms = new JwtSecurityToken(
                    issuer: _config["jwt:issuer"],
                    audience: _config["jwt:audience"],
                    expires: DateTime.Now.AddMinutes(20),
                    signingCredentials: new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256)
                    );
                var tokenHandler = new JwtSecurityTokenHandler();
                var token = tokenHandler.WriteToken(tokenParms);

                return Ok(new { token = token });


            }
            else
            {
                return BadRequest("invalid user credentials");
            }
           
        }
    }
}
