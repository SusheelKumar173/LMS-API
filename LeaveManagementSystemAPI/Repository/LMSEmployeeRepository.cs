using LeaveManagementSystemAPI.DBConnect;
using LeaveManagementSystemAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeaveManagementSystemAPI.Repository
{
    public class LMSEmployeeRepository : ILMSEmployeeRepository
    {
        private readonly LMSDataContext lMSDataContext;

        public LMSEmployeeRepository(LMSDataContext lMSDataContext)
        {
            this.lMSDataContext = lMSDataContext;
        }

        public async Task<int> AddEmployee(Employee employee)
        {
            lMSDataContext.Employees.Add(new Employee
            {
                Id = employee.Id,
                Name = employee.Name,
                EmailId = employee.EmailId,
                Phone = employee.Phone,
                Password = employee.Password,
                Department = employee.Department,
                DOJ = employee.DOJ,
                Available_Leave_Balance=employee.Available_Leave_Balance,
                ManagerId = employee.ManagerId
            });
           await lMSDataContext.SaveChangesAsync();
            return employee.Id;
        }

        public async Task<int> DeleteEmployee(int empid)
        {
            var ar = await lMSDataContext.Employees.Where(x => x.Id == empid).FirstOrDefaultAsync();
            if(ar!=null)
            {
                lMSDataContext.Employees.Remove(ar);
                await lMSDataContext.SaveChangesAsync();

            }
            return empid;
        }

        public async Task<List<Employee>> GetAllEmployees()
        {
            var ar = lMSDataContext.Employees.ToListAsync();
            return await ar;
        }

        public async Task<List<Employee>> GetAllEmployees(int ManagerId)
        {
            var ar = lMSDataContext.Employees.Where(x => x.ManagerId == ManagerId).ToListAsync();
            return await ar;
        }

        public async Task<Employee> GetEmployeeById(int empid)
        {
            var ar = lMSDataContext.Employees.Where(x => x.Id==empid).FirstOrDefaultAsync();
            return await ar;
        }

        public Employee Login(string emailId,string password)
        {
            var ar = lMSDataContext.Employees.Where(x =>x.EmailId==emailId && x.Password == password).FirstOrDefault();
            //if (ar != null)
            //{
            //    return  ar;
            //}
            //else
            //{
            //    return ar.Id;
            //}
            return ar;
        }

        public async Task<int> UpdateEmployee(int empid, Employee employee)
        {
            var ar = await lMSDataContext.Employees.Where(x => x.Id == empid).FirstOrDefaultAsync();
            if(ar!=null)
            {
                ar.Name = employee.Name;
                ar.Password = employee.Password;
                ar.EmailId = employee.EmailId;
                //ar.Department = employee.Department;
                //ar.DOJ = employee.DOJ;
                ar.Phone = employee.Phone;
                //ar.ManagerId = employee.ManagerId;
                await lMSDataContext.SaveChangesAsync();

            }
            return empid;

        }



    }
}
