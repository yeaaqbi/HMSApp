using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Contexts;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientRecordsController : ControllerBase
    {
        private readonly HospitalDbContext _context;

        public PatientRecordsController(HospitalDbContext context)
        {
            _context = context;
        }

        // GET: api/PatientRecords
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PatientRecord>>> GetpatientRecords()
        {
            return await _context.patientRecords.ToListAsync();
        }

        // GET: api/PatientRecords/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PatientRecord>> GetPatientRecord(int? id)
        {
            var patientRecord = await _context.patientRecords.FindAsync(id);

            if (patientRecord == null)
            {
                return NotFound();
            }

            return patientRecord;
        }

        // PUT: api/PatientRecords/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPatientRecord(int? id, PatientRecord patientRecord)
        {
            if (id != patientRecord.patientId)
            {
                return BadRequest();
            }

            _context.Entry(patientRecord).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PatientRecordExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/PatientRecords
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<PatientRecord>> PostPatientRecord(PatientRecord patientRecord)
        {
            _context.patientRecords.Add(patientRecord);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PatientRecordExists(patientRecord.patientId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetPatientRecord", new { id = patientRecord.patientId }, patientRecord);
        }

        // DELETE: api/PatientRecords/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PatientRecord>> DeletePatientRecord(int? id)
        {
            var patientRecord = await _context.patientRecords.FindAsync(id);
            if (patientRecord == null)
            {
                return NotFound();
            }

            _context.patientRecords.Remove(patientRecord);
            await _context.SaveChangesAsync();

            return patientRecord;
        }

        private bool PatientRecordExists(int? id)
        {
            return _context.patientRecords.Any(e => e.patientId == id);
        }
    }
}
