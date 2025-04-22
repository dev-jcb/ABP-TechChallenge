using Volo.Abp.Application.Services;
using TechChallenge.Localization;

namespace TechChallenge.Services;

/* Inherit your application services from this class. */
public abstract class TechChallengeAppService : ApplicationService
{
    protected TechChallengeAppService()
    {
        LocalizationResource = typeof(TechChallengeResource);
    }
}