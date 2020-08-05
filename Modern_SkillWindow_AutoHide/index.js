exports.ClientMod = class
{
    constructor(mod)
    {
        this.install = function(installer)
        {
            if (mod.clientInterface.arch == 'x64') return;
            if (mod.majorPatchVersion > 95)
            {
                mod.warn('Mod disabled due to incompatibility with current patch. Wait for an update by the developer.');
                return;
            }
            else if (mod.majorPatchVersion >= 92) 
            {
                installer.gpk("90/S1UI_SkillWindow.gpk");
                installer.gpk("90/S1UI_TestQuickSlot.gpk");
            }
            else
            {
                installer.gpk("86/S1UI_SkillWindow.gpk");
                installer.gpk("86/S1UI_TestQuickSlot.gpk");
            }
        };
    }
}
