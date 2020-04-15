using System;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Contexts
{
    public class HospitalDbContext:DbContext
    {
        public HospitalDbContext(DbContextOptions<HospitalDbContext> options):base(options)
        {
        }
        public DbSet<Patient> patients { get; set; }
        public DbSet<Employee> employees { get; set; }
        public DbSet<PatientRecord> patientRecords { get; set; }
        public DbSet<Department> departments { get; set; }
    }
}
