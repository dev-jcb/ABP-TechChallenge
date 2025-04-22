using Volo.Abp.DependencyInjection;
using Microsoft.EntityFrameworkCore;

namespace TechChallenge.Data;

public class TechChallengeDbSchemaMigrator : ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public TechChallengeDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        
        /* We intentionally resolving the TechChallengeDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<TechChallengeDbContext>()
            .Database
            .MigrateAsync();

    }
}
