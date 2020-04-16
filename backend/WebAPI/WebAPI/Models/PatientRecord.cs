using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models
{
    public class PatientRecord
    {
        [Key]
        public int id { get; set; }

        public int? patientId { get; set; }
        public Patient Patient { get; set; }

        public int? departmentId { get; set; }
        public Department Department { get; set; }

        [Column(TypeName = "Date")]
        public DateTime entryDate { get; set; }

        [Column(TypeName = "float")]
        public float bill { get; set; }




    }
}
