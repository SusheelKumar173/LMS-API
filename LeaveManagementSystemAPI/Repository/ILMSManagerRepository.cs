using LeaveManagementSystemAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeaveManagementSystemAPI.Repository
{
    public interface ILMSManagerRepository
    {
        Task<List<Manager>> GetAllManagers();

        Task<Manager> GetManagerById(int managerid);

        Task<int> AddManager(Manager manager);

        Task<int> UpdateManager(int managerid, Manager manager);

        Task<int> DeleteManager(int managerid);

        Manager Login(string emailId, string password);
    }
}
