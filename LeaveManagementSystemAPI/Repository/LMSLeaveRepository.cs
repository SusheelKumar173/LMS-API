using LeaveManagementSystemAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LeaveManagementSystemAPI.DBConnect;
using Microsoft.EntityFrameworkCore;

namespace LeaveManagementSystemAPI.Repository
{
    public class LMSLeaveRepository : ILMSLeaveRepository
    {
        private readonly LMSDataContext lMSDataContext;

        public LMSLeaveRepository(LMSDataContext lMSDataContext)
        {
            this.lMSDataContext = lMSDataContext;
        }

        public async Task<int> AddLeave(LeaveType leaveType)
        {
            lMSDataContext.LeaveTypes.Add(
                new LeaveType
                {
                    Id = leaveType.Id,
                    Name=leaveType.Name,
                    DefaultDays=leaveType.DefaultDays
                });
            await lMSDataContext.SaveChangesAsync();
            return leaveType.Id;
        }

        public async Task<int> DeleteLeave(int leaveid)
        {
            var ar = await lMSDataContext.LeaveTypes.Where(x => x.Id == leaveid).FirstOrDefaultAsync();
            if(ar!=null)
            {
                lMSDataContext.LeaveTypes.Remove(ar);
                await lMSDataContext.SaveChangesAsync();
            }
            return leaveid;
        }

        public async Task<List<LeaveType>> GetAllLeaveTypes()
        {
            var leaves = lMSDataContext.LeaveTypes.ToListAsync();
            return await leaves;
        }

        public async Task<LeaveType> GetLeaveTypeById(int leaveid)
        {
            var ar = await lMSDataContext.LeaveTypes.Where(x => x.Id == leaveid).FirstOrDefaultAsync();
            return ar;
        }

        public async Task<int> UpdateLeave(int leaveid, LeaveType leaveType)
        {
            var ar = await lMSDataContext.LeaveTypes.Where(x => x.Id == leaveid).FirstOrDefaultAsync();
            if(ar!=null)
            {
                ar.Name = leaveType.Name;
                ar.DefaultDays = ar.DefaultDays;
                await lMSDataContext.SaveChangesAsync();
            }
            return leaveid;
        }
    }
}
