exports.ClientMod = class
{
    constructor(mod)
    {
        this.install = function(installer)
        {
            if (mod.clientInterface.info.arch === 'x64') return;
            mod.warn("This mod will be disabled without showing any warning after 64-bit client patch hits. It will be automatically re-enabled when gpk mods will be supported again an update is released.");

            if (mod.majorPatchVersion > 95)
            {
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
