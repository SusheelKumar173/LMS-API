using LeaveManagementSystemAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeaveManagementSystemAPI.Repository
{
    public interface ILMSLeavesRepository
    {

        Task<List<Leaves>> GetAllLeaves();

        Task<Leaves> GetLeaveById(int id);

        Task<int> ApplyLeave(Leaves leaves);

        Task<int> UpdateStatus(int leaveid, Leaves leaves);

        Task<List<Leaves>> GetLeaveDetailsByEmpId(int employeeId);

        Task<List<Leaves>> GetAllPendingLeaves();

        Task<List<Leaves>> GetAllApprovedLeaves();
    }
}
