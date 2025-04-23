using Volo.Abp.Application.Dtos;

namespace TechChallenge.Services.Dtos.ContentEntries
{
    public class ContentEntryDto : EntityDto<Guid>
    {
        public string Title { get; set; }
        public string Slug { get; set; }
        public string HtmlContent { get; set; }
        public bool IsHomePage { get; set; }
    }
}
