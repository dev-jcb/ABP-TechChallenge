using System.ComponentModel.DataAnnotations;

namespace TechChallenge.Services.Dtos.ContentEntries
{
    public class CreateUpdateContentEntryDto
    {
        [Required]
        [StringLength(128)]
        public string Title { get; set; }
        [Required]
        [StringLength(128)]
        public string Slug { get; set; }
        public string HtmlContent { get; set; }
        public bool IsHomePage { get; set; }
        public string? CoverImageUrl { get; set; }

    }
}
