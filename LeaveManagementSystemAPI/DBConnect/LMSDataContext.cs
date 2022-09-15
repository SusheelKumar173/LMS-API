using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LeaveManagementSystemAPI.Models;

namespace LeaveManagementSystemAPI.DBConnect
{
    public class LMSDataContext:DbContext
    {
        public LMSDataContext(DbContextOptions<LMSDataContext>options):base(options)
        {

        }

        public DbSet<Employee> Employees { get; set; }

        public DbSet<Manager> Managers { get; set; }

        public DbSet<LeaveType> LeaveTypes { get; set; }

        public DbSet<Leaves> Leaves { get; set; }
    }
}
