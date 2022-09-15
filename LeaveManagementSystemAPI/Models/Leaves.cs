using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace LeaveManagementSystemAPI.Models
{
    public class Leaves
    {
       

        [Required]
        [Key]
        public int Id { get; set; }

        [Required]
        public int EmployeeId { get; set; }

        [Required]
        public int Number_Of_Days { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime Start_Date { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime End_Date { get; set; }

        [Required]
        public string Leave_Type { get; set; }

      
        public string Status { get; set; }

        [Required]
        public string Reason { get; set; }

        public DateTime Applied_On { get; set; }


        [DataType(DataType.MultilineText)]
        public string Comments { get; set; }

    }
}
