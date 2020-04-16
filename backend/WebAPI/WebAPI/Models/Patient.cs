using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models
{
    public class Patient
    {
        [Key]
        public int id { get; set; }

        [Column(TypeName ="nvarchar(50)")]
        public string name { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string email { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string city { get; set; }

        [Column(TypeName = "Date")]
        public DateTime dateOfBirth { get; set; }

        public ICollection<PatientRecord> patientEntries { get; set; }

    }
}
