using LeaveManagementSystemAPI.DBConnect;
using LeaveManagementSystemAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeaveManagementSystemAPI.Repository
{
    public class LMSManagerRepository : ILMSManagerRepository
    {
        private readonly LMSDataContext lMSDataContext;

        public LMSManagerRepository(LMSDataContext lMSDataContext)
        {
            this.lMSDataContext = lMSDataContext;
        }

        public async Task<int> AddManager(Manager manager)
        {
            lMSDataContext.Managers.Add(
                new Manager
                {
                    Id = manager.Id,
                    FullName = manager.FullName,
                    EmailId = manager.EmailId,
                    Password = manager.Password,
                    Phone = manager.Phone
                });
            await lMSDataContext.SaveChangesAsync();
            return manager.Id;
        }

        public async Task<int> DeleteManager(int managerid)
        {
            var ar = await lMSDataContext.Managers.Where(x => x.Id == managerid).FirstOrDefaultAsync();
            if(ar!=null)
            {
                lMSDataContext.Managers.Remove(ar);
                await lMSDataContext.SaveChangesAsync();
            }
            return managerid;
        }

        public async Task<List<Manager>> GetAllManagers()
        {
            var ar = await lMSDataContext.Managers.ToListAsync();
            return ar;
        }

        public async Task<Manager> GetManagerById(int managerid)
        {
            var ar = await lMSDataContext.Managers.Where(x => x.Id == managerid).FirstOrDefaultAsync();
            return ar;

        }

        public async Task<int> UpdateManager(int managerid, Manager manager)
        {
            var ar = await lMSDataContext.Managers.Where(x => x.Id == managerid).FirstOrDefaultAsync();
            if(ar!=null)
            {
                ar.FullName = manager.FullName;
                ar.EmailId = manager.EmailId;
                ar.Password = manager.Password;
                ar.Phone = manager.Phone;
                await lMSDataContext.SaveChangesAsync();
            }
            return managerid;
        }


        public Manager Login(string emailId, string password)
        {
            var ar = lMSDataContext.Managers.Where(x => x.EmailId == emailId && x.Password == password).FirstOrDefault();
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
    }
}
