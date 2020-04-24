using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class AddCascading : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_patientRecords_departments_departmentId",
                table: "patientRecords");

            migrationBuilder.DropForeignKey(
                name: "FK_patientRecords_patients_patientId",
                table: "patientRecords");

            migrationBuilder.AddForeignKey(
                name: "FK_patientRecords_departments_departmentId",
                table: "patientRecords",
                column: "departmentId",
                principalTable: "departments",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_patientRecords_patients_patientId",
                table: "patientRecords",
                column: "patientId",
                principalTable: "patients",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_patientRecords_departments_departmentId",
                table: "patientRecords");

            migrationBuilder.DropForeignKey(
                name: "FK_patientRecords_patients_patientId",
                table: "patientRecords");

            migrationBuilder.AddForeignKey(
                name: "FK_patientRecords_departments_departmentId",
                table: "patientRecords",
                column: "departmentId",
                principalTable: "departments",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_patientRecords_patients_patientId",
                table: "patientRecords",
                column: "patientId",
                principalTable: "patients",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
