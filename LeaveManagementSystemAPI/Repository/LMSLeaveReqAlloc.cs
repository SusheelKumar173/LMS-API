using LeaveManagementSystemAPI.DBConnect;
using LeaveManagementSystemAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeaveManagementSystemAPI.Repository
{
    public class LMSLeaveReqAlloc : ILMSLeavesRepository
    {

        private readonly LMSDataContext lMSDataContext;

        public LMSLeaveReqAlloc(LMSDataContext lMSDataContext)
        {
            this.lMSDataContext = lMSDataContext;
        }


        public async Task<int> ApplyLeave(Leaves leaves)
        {
            lMSDataContext.Leaves.Add(new Leaves
            {
                Id = leaves.Id,
                EmployeeId=leaves.EmployeeId,
                Number_Of_Days=leaves.Number_Of_Days,
                Start_Date=leaves.Start_Date,
                End_Date=leaves.End_Date,
                Leave_Type=leaves.Leave_Type,
                Status="Pending",
                Reason=leaves.Reason,
                Applied_On=leaves.Applied_On,
                Comments=null

            });
            await lMSDataContext.SaveChangesAsync();
            return leaves.Id;
        }

        public async Task<List<Leaves>> GetAllLeaves()
        {
            var ar = await lMSDataContext.Leaves.ToListAsync();
            return ar;
        }

       

        public async Task<List<Leaves>> GetAllPendingLeaves()
        {
            var ar = await lMSDataContext.Leaves.Where(x=>x.Status == "Pending").ToListAsync();
            return ar;
        }

        public async Task<Leaves> GetLeaveById(int leaveid)
        {
            var ar = await lMSDataContext.Leaves.Where(x => x.Id == leaveid).FirstOrDefaultAsync();
            return ar;
        }

        public async Task<int> UpdateStatus(int leaveid, Leaves leaves)
        {
            var ar = await lMSDataContext.Leaves.Where(x => x.Id == leaveid).FirstOrDefaultAsync();
            if(ar!=null)
            {
                ar.Status = leaves.Status;
                ar.Comments = leaves.Comments;
                await lMSDataContext.SaveChangesAsync();
            }
            if(ar.Status=="Approved")
            {
                var br = await lMSDataContext.Employees.Where(x => x.Id == ar.EmployeeId).FirstOrDefaultAsync();
                br.Available_Leave_Balance = br.Available_Leave_Balance - ar.Number_Of_Days;
                await lMSDataContext.SaveChangesAsync();
            }
            return leaveid;
        }


        public async Task<List<Leaves>> GetAllApprovedLeaves()
        {
            var ar = await lMSDataContext.Leaves.Where(x => x.Status == "Approved").ToListAsync();
            return ar;
        }

        public async Task<List<Leaves>> GetLeaveDetailsByEmpId(int employeeId)
        {
            var ar = await lMSDataContext.Leaves.Where(x => x.EmployeeId == employeeId).ToListAsync();
            return ar;
        }
    }
}
