using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class NewTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "departments",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(50)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_departments", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "patientRecords",
                columns: table => new
                {
                    patientId = table.Column<int>(nullable: false),
                    departmentId = table.Column<int>(nullable: false),
                    id = table.Column<int>(nullable: false),
                    entryDate = table.Column<DateTime>(type: "Date", nullable: false),
                    bill = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_patientRecords", x => new { x.patientId, x.departmentId });
                    table.ForeignKey(
                        name: "FK_patientRecords_departments_departmentId",
                        column: x => x.departmentId,
                        principalTable: "departments",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_patientRecords_patients_patientId",
                        column: x => x.patientId,
                        principalTable: "patients",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_patientRecords_departmentId",
                table: "patientRecords",
                column: "departmentId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "patientRecords");

            migrationBuilder.DropTable(
                name: "departments");
        }
    }
}
