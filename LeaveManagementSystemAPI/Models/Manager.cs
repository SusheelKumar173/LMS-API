using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace LeaveManagementSystemAPI.Models
{
    public class Manager
    {
        [Key]
        [Required]
        public int Id { get; set; }

        [Required]
        [StringLength(20, MinimumLength = 5)]
        public string FullName { get; set; }

        [Required]
        [EmailAddress]
        public string EmailId { get; set; }

       
        public int Phone { get; set; }


        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        public int EmployeeId { get; set; }
    }
}
