using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace WebAPI.Models
{
    public class DonationDBContext:DbContext
    {
        public DonationDBContext(DbContextOptions<DonationDBContext> options):base(options)
        {
            
        }
        public DbSet<DCandidate> DonationCandidates { get; set; }
    }
}
