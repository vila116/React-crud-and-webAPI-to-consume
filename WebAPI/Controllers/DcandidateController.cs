using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata.Ecma335;
using WebAPI.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    [Route("api/{controller}")]
    [ApiController]
    public class DcandidateController : ControllerBase
    {
        private readonly DonationDBContext _context;
        public DcandidateController(DonationDBContext context)
        {
            _context = context;
        }

        // GET: api/Dcandidate
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DCandidate>>> GetDcandidates()
        {
            return await _context.DonationCandidates.ToListAsync();
        }
        // GET api/Dcandidate/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DCandidate>>GetDcandidate(int id)
        {
            var dcandidate = await _context.DonationCandidates.FindAsync(id);
            if (dcandidate == null)
                return NotFound();
            return dcandidate;
            
        }

        // POST api/Dcandidate
        [HttpPost]
        public async Task<ActionResult<DCandidate>> PostDcandidate(DCandidate dCandidate)
        {
            _context.DonationCandidates.Add(dCandidate);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetDcandidates", new { id = dCandidate.Id }, dCandidate);
        }

        // PUT api/Dcandidate/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id,DCandidate dCandidate)
        {
            dCandidate.Id = id;
            _context.Entry(dCandidate).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();

            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DcandidateExsist(id))
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

        // DELETE api/<DcandidateController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DCandidate>> DeleteDcandidate(int id)
        {
            var dcandidate = await _context.DonationCandidates.FindAsync(id);
            if (dcandidate == null)
            {
                return NotFound();   
            }
            _context.DonationCandidates.Remove(dcandidate);
            _context.Entry(dcandidate).State = EntityState.Deleted;
            await _context.SaveChangesAsync();
            return dcandidate;

        }

        private bool DcandidateExsist(int id)
        {
            return _context.DonationCandidates.Any(e => e.Id == id);
        }
    }
}
