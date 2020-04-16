﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebAPI.Contexts;

namespace WebAPI.Migrations
{
    [DbContext(typeof(HospitalDbContext))]
    [Migration("20200416125804_NewTables")]
    partial class NewTables
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WebAPI.Models.Department", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("name")
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("id");

                    b.ToTable("departments");
                });

            modelBuilder.Entity("WebAPI.Models.Patient", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("city")
                        .HasColumnType("nvarchar(50)");

                    b.Property<DateTime>("dateOfBirth")
                        .HasColumnType("Date");

                    b.Property<string>("email")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("name")
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("id");

                    b.ToTable("patients");
                });

            modelBuilder.Entity("WebAPI.Models.PatientRecord", b =>
                {
                    b.Property<int?>("patientId")
                        .HasColumnType("int");

                    b.Property<int?>("departmentId")
                        .HasColumnType("int");

                    b.Property<double>("bill")
                        .HasColumnType("float");

                    b.Property<DateTime>("entryDate")
                        .HasColumnType("Date");

                    b.Property<int>("id")
                        .HasColumnType("int");

                    b.HasKey("patientId", "departmentId");

                    b.HasIndex("departmentId");

                    b.ToTable("patientRecords");
                });

            modelBuilder.Entity("WebAPI.Models.PatientRecord", b =>
                {
                    b.HasOne("WebAPI.Models.Department", "Department")
                        .WithMany("patientEntries")
                        .HasForeignKey("departmentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("WebAPI.Models.Patient", "Patient")
                        .WithMany("patientEntries")
                        .HasForeignKey("patientId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}