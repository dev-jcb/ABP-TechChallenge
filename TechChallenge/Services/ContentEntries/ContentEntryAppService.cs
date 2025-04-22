using TechChallenge.Entities;
using TechChallenge.Services.Dtos.ContentEntries;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using System.Linq.Dynamic.Core;
using Microsoft.AspNetCore.Authorization;
using TechChallenge.Permissions;

namespace TechChallenge.Services.ContentEntries
{
    [Authorize(TechChallengePermissions.ContentEntries.Default)]
    public class ContentEntryAppService : ApplicationService, IContentEntryAppService
    {
        private readonly IRepository<ContentEntry, Guid> _repository;
        public ContentEntryAppService(IRepository<ContentEntry, Guid> repository)
        {
            _repository = repository;
        }

        public async Task<ContentEntryDto> GetAsync(Guid id)
        {
            var contentEntry = await _repository.GetAsync(id);

            return ObjectMapper.Map<ContentEntry, ContentEntryDto>(contentEntry);
        }

        public async Task<ContentEntryDto> GetBySlug(string slug)
        {
            var contentEntry = await _repository.FirstOrDefaultAsync(x => x.Slug == slug);
            return contentEntry != null ? ObjectMapper.Map<ContentEntry, ContentEntryDto>(contentEntry) : null!;
        }

        public async Task<PagedResultDto<ContentEntryDto>> GetListAsync(PagedAndSortedResultRequestDto input)
        {
            var queryableContent = await _repository.GetQueryableAsync();

            var query = queryableContent
                .OrderBy(input.Sorting.IsNullOrWhiteSpace() ? "Title" : input.Sorting)
                .Skip(input.SkipCount)
                .Take(input.MaxResultCount);

            var contentEntries = await AsyncExecuter.ToListAsync(query);

            var totalCount = await AsyncExecuter.CountAsync(queryableContent);

            return new PagedResultDto<ContentEntryDto>(
                totalCount,
                ObjectMapper.Map<List<ContentEntry>, List<ContentEntryDto>>(contentEntries)
            );
        }

        public async Task<ContentEntryDto> CreateAsync(CreateUpdateContentEntryDto input)
        {
            if (input.IsHomePage)
            {
                var existing = await _repository.GetListAsync(x => x.IsHomePage);

                foreach (var entry in existing)
                {
                    entry.IsHomePage = false;
                    await _repository.UpdateAsync(entry);
                }
            }

            var contentEntry = ObjectMapper.Map<CreateUpdateContentEntryDto, ContentEntry>(input);

            await _repository.InsertAsync(contentEntry);

            return ObjectMapper.Map<ContentEntry, ContentEntryDto>(contentEntry);
        }

        public async Task<ContentEntryDto> UpdateAsync(Guid id, CreateUpdateContentEntryDto input)
        {
            var contentEntry = await _repository.GetAsync(id);
            ObjectMapper.Map(input, contentEntry);

            await _repository.UpdateAsync(contentEntry);

            return ObjectMapper.Map<ContentEntry, ContentEntryDto>(contentEntry);
        }

        public async Task DeleteAsync(Guid id)
        {
            await _repository.DeleteAsync(id);
        }
    }
}
