using Microsoft.Extensions.Localization;
using TechChallenge.Localization;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace TechChallenge;

[Dependency(ReplaceServices = true)]
public class TechChallengeBrandingProvider : DefaultBrandingProvider
{
    private IStringLocalizer<TechChallengeResource> _localizer;

    public TechChallengeBrandingProvider(IStringLocalizer<TechChallengeResource> localizer)
    {
        _localizer = localizer;
    }

    public override string AppName => _localizer["AppName"];
}