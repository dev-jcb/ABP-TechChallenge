using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace TechChallenge.Data;

public class TechChallengeDbContextFactory : IDesignTimeDbContextFactory<TechChallengeDbContext>
{
    public TechChallengeDbContext CreateDbContext(string[] args)
    {
        TechChallengeEfCoreEntityExtensionMappings.Configure();
        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<TechChallengeDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new TechChallengeDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}