using System;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Contexts
{
    public class HospitalDbContext:DbContext
    {
        public HospitalDbContext(DbContextOptions<HospitalDbContext> options):base(options){}
        public DbSet<Patient> patients { get; set; }
        public DbSet<PatientRecord> patientRecords { get; set; }
        public DbSet<Department> departments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PatientRecord>()
                .HasKey(entry => new { entry.id});
            modelBuilder.Entity<PatientRecord>()
                .HasOne(entry => entry.Patient)
                .WithMany(pr => pr.patientEntries)
                .HasForeignKey(entry => entry.patientId)
                .OnDelete(DeleteBehavior.Cascade);
            modelBuilder.Entity<PatientRecord>()
                .HasOne(entry => entry.Department)
                .WithMany(entry => entry.patientEntries)
                .HasForeignKey(entry => entry.departmentId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }


}
