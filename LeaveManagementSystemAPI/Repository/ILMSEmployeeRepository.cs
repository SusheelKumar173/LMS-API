using LeaveManagementSystemAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeaveManagementSystemAPI.Repository
{
    public interface ILMSEmployeeRepository
    {
        Task<List<Employee>> GetAllEmployees();

        Task<Employee> GetEmployeeById(int id);

        Task<int> AddEmployee(Employee employee);

        Task<int> UpdateEmployee(int empid, Employee employee);

        Task<int> DeleteEmployee(int empid);

        Employee Login(string emailId,string password);

        Task<List<Employee>> GetAllEmployees(int ManagerId);
    }
}
