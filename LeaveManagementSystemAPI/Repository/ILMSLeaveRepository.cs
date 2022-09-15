using LeaveManagementSystemAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeaveManagementSystemAPI.Repository
{
    public interface ILMSLeaveRepository
    {
      
            Task<List<LeaveType>> GetAllLeaveTypes();

            Task<LeaveType> GetLeaveTypeById(int id);

            Task<int> AddLeave(LeaveType leaveType);

            Task<int> UpdateLeave(int leaveid, LeaveType leaveType);

            Task<int> DeleteLeave(int leaveid);

        }
}
