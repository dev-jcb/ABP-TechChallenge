using TechChallenge.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace TechChallenge.Permissions;

public class TechChallengePermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(TechChallengePermissions.GroupName);

        var booksPermission = myGroup.AddPermission(TechChallengePermissions.Books.Default, L("Permission:Books"));
        booksPermission.AddChild(TechChallengePermissions.Books.Create, L("Permission:Books.Create"));
        booksPermission.AddChild(TechChallengePermissions.Books.Edit, L("Permission:Books.Edit"));
        booksPermission.AddChild(TechChallengePermissions.Books.Delete, L("Permission:Books.Delete"));

        var contentEntryPermission = myGroup.AddPermission(TechChallengePermissions.ContentEntries.Default,
            L("Permission:ContentEntries"));
        contentEntryPermission.AddChild(TechChallengePermissions.ContentEntries.Create,
            L("Permission:ContentEntries.Create"));
        contentEntryPermission.AddChild(TechChallengePermissions.ContentEntries.Edit,
            L("Permission:ContentEntries.Edit"));
        contentEntryPermission.AddChild(TechChallengePermissions.ContentEntries.Delete,
            L("Permission:ContentEntries.Delete"));

        //Define your own permissions here. Example:
        //myGroup.AddPermission(TechChallengePermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<TechChallengeResource>(name);
    }
}
