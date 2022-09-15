using LeaveManagementSystemAPI.Models;
using LeaveManagementSystemAPI.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeaveManagementSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly ILMSEmployeeRepository lMSEmployeeRepository;

        public EmployeeController(ILMSEmployeeRepository lMSEmployeeRepository)
        {
            this.lMSEmployeeRepository = lMSEmployeeRepository;
        }

        [HttpGet("Employees")]
        public async Task<IActionResult> GetAllEmployees()
        {
            var employees = await lMSEmployeeRepository.GetAllEmployees();
            return Ok(employees);
        }

        [HttpGet("Search/{id}")]
        public async Task<IActionResult> SearchEmployeeById(int id)
        {
            var employee = await lMSEmployeeRepository.GetEmployeeById(id);
            return Ok(employee);
        }

        [HttpPost("Employees")]
        public async Task<IActionResult> CreateEmployee(Employee employee)
        {
            var employees = await lMSEmployeeRepository.AddEmployee(employee);
            return Ok(employee.Id);
        }

        [HttpPut("Update/{id}")]
        public async Task<IActionResult> UpdateEmployee(int id,Employee employee)
        {
            var employees = await lMSEmployeeRepository.UpdateEmployee(id, employee);
            return Ok(employee.Id);
        }

        [HttpDelete("Delete/{id}")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
            var employee = await lMSEmployeeRepository.DeleteEmployee(id);
            return Ok(employee);
        }

        [HttpPost("Login")]
        public  IActionResult Login(string emailId,string password)
        { 
            var employees = lMSEmployeeRepository.Login(emailId,password);
            return Ok(employees);
        }

        [HttpGet("Employees/{ManagerId}")]
        public async Task<IActionResult> GetAllEmployees(int ManagerId)
        {
            var employees = await lMSEmployeeRepository.GetAllEmployees(ManagerId);
            return Ok(employees);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmployeeByID(int id)
        {
            var employee = await lMSEmployeeRepository.GetEmployeeById(id);
            return Ok(employee);
        }
    }
}
