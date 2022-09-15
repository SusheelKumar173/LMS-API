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
    public class LeaveTypeController : ControllerBase
    {
        private readonly ILMSLeaveRepository lMSLeaveRepository;

        public LeaveTypeController(ILMSLeaveRepository lMSLeaveRepository)
        {
            this.lMSLeaveRepository = lMSLeaveRepository;
        }

        [HttpGet("Leaves")]
        public async Task<IActionResult> LeaveTypeDetails()
        {
          var leavetypes= await lMSLeaveRepository.GetAllLeaveTypes();
            return Ok(leavetypes);
        }

        [HttpGet("SearchLeave/{id}")]
        public async Task<IActionResult> SearchLeaveById(int id)
        {
            var leave = await lMSLeaveRepository.GetLeaveTypeById(id);
            return Ok(leave);
        }

        [HttpPost("CreateLeave")]
        public async Task<IActionResult> CreateLeaveType(LeaveType leaveType)
        {
           var leave = await lMSLeaveRepository.AddLeave(leaveType);
            return Ok(leaveType.Id);
        }

        [HttpPut("UpdateLeave/{id}")]
        public async Task<IActionResult> UpdateLeaves(int id,LeaveType leaveType)
        {
            var leave = await lMSLeaveRepository.UpdateLeave(id, leaveType);
            return Ok(leaveType.Id);
        }

        [HttpDelete("Delete/{id}")]
        public async Task<IActionResult> DeleteLeave(int id)
        {
            var leave = await lMSLeaveRepository.DeleteLeave(id);
            return Ok(id);
        }
    }
}
