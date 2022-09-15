using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LeaveManagementSystemAPI.Models
{
    public class Employee
    {
        [Required]
        [Key]
        public int Id { get; set; }

        [StringLength(20,MinimumLength =5)]
        public string Name { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        [EmailAddress]
        public string EmailId { get; set; }

      
        [DataType(DataType.PhoneNumber)]
        public int Phone { get; set; }

       [DataType(DataType.Date)]
        public DateTime DOJ { get; set; }

      
        public string Department { get; set; }


        public int Available_Leave_Balance { get; set; }


        [ForeignKey("ManagerId")]
        public Manager Manager { get; set; }
        public int? ManagerId { get; set; }

    }
}
