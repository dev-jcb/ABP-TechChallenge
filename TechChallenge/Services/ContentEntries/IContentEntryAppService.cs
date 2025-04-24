using TechChallenge.Services.Dtos.ContentEntries;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace TechChallenge.Services.ContentEntries
{
    public interface IContentEntryAppService : ICrudAppService<ContentEntryDto, Guid, PagedAndSortedResultRequestDto,
        CreateUpdateContentEntryDto>
    {
        Task<ContentEntryDto> GetBySlugAsync(string slug);
    }
}
