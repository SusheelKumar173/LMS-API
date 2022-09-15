using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LeaveManagementSystemAPI.Repository;
using LeaveManagementSystemAPI.Models;

namespace LeaveManagementSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ManagerController : ControllerBase
    {
        private readonly ILMSManagerRepository lMSManagerRepository;

        public ManagerController(ILMSManagerRepository lMSManagerRepository)
        {
            this.lMSManagerRepository = lMSManagerRepository;
        }

        [HttpGet("Managers")]
        public async Task<IActionResult> DisplayAllManagers()
        {
            var managers = await lMSManagerRepository.GetAllManagers();
            return Ok(managers);
        }

        [HttpGet("SearchManager/{id}")]
        public async Task<IActionResult> SearchManageById(int id)
        {
            var manager = await lMSManagerRepository.GetManagerById(id);
            return Ok(manager);
        }

        [HttpPost("CreateManager")]
        public async Task<IActionResult> CreateManager(Manager manager)
        {
            var managers = await lMSManagerRepository.AddManager(manager);
            return Ok(manager.Id);
        }

        [HttpDelete("DeleteManager/{id}")]
        public async Task<IActionResult> DeleteManager(int id)
        {
            var manager = await lMSManagerRepository.DeleteManager(id);
            return Ok(id);
        }


        [HttpPut("Update/{id}")]
        public async Task<IActionResult> UpdateManager(int id,Manager manager)
        {
            var managers = await lMSManagerRepository.UpdateManager(id, manager);
            return Ok(id);
        }


        [HttpPost("Login")]
        public IActionResult Login(string emailId,string password)
        {
            var managers = lMSManagerRepository.Login(emailId,password);
            return Ok(managers);
        }

    }
}
