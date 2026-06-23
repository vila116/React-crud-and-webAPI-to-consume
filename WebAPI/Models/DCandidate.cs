using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models
{
    public class DCandidate
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string fullName { get; set; }

        [Column(TypeName = "nvarchar(16)")]
        public string mobile { get; set; }
        public int age { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string bloodGroup { get; set; } = string.Empty;
        [Column(TypeName = "nvarchar(100)")]
        public string address { get; set; }
    }
}
