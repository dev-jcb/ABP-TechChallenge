using Volo.Abp.Domain.Entities.Auditing;

namespace TechChallenge.Entities.ContentEntries
{
    public class ContentEntry : AuditedAggregateRoot<Guid>
    {
        public string Title { get; set; } = string.Empty;
        public string Slug { get; set; } = string.Empty;
        public string HtmlContent { get; set; } = string.Empty;
        public bool IsHomePage { get; set; }
    }
}
