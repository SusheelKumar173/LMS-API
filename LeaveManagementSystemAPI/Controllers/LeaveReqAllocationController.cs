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
    public class LeaveReqAllocationController : ControllerBase
    {
        private readonly ILMSLeavesRepository lmsLeavesRepository;

        public LeaveReqAllocationController(ILMSLeavesRepository lMSLeavesRepository)
        {
            this.lmsLeavesRepository = lMSLeavesRepository;
        }

        [HttpGet("AllLeaves")]
        public async Task<IActionResult> GetAllLeaves()
        {
            var leaves = await lmsLeavesRepository.GetAllLeaves();
            return Ok(leaves);
        }

        [HttpPost("Apply")]
        public async Task<IActionResult> ApplyLeave(Leaves leaves)
        {
            var leave = await lmsLeavesRepository.ApplyLeave(leaves);
            return Ok(leave);
        }

        [HttpPut("Approve")]
        public async Task<IActionResult> Approve(int id, Leaves leaves)
        {
            var status = await lmsLeavesRepository.UpdateStatus(id, leaves);

            return Ok(id);

        }


        [HttpGet("Pending")]
        public async Task<IActionResult> PendingLeaves()
        {
            var pending = await lmsLeavesRepository.GetAllPendingLeaves();
            return Ok(pending);
        }

        [HttpGet("Approved")]
        public async Task<IActionResult> ApprovedLeaves()
        {
            var approved = await lmsLeavesRepository.GetAllApprovedLeaves();
            return Ok(approved);
        }

        [HttpGet("Details")]
        public async Task<IActionResult> Details(int employeeId)
        {
            var details = await lmsLeavesRepository.GetLeaveDetailsByEmpId(employeeId);
            return Ok(details);
        }


    }
}

