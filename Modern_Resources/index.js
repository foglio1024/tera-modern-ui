exports.ClientMod = class
{
    constructor(mod)
    {
        this.install = function(installer)
        {
            if (mod.clientInterface.arch == 'x64') return;
            mod.warn("This mod will be disabled without showing any warning after 64-bit client patch hits. It will be automatically re-enabled when gpk mods will be supported again an update is released.");

            if (mod.majorPatchVersion > 93)
            {
                return;
            }
            else if (mod.majorPatchVersion >= 93)
            {
                installer.gpk("85/S1UIRES_Skin.gpk");
                installer.gpk("93/S1UIRES_Component.gpk");
                installer.gpk("91/S1UIRES_Atlas.gpk");
            }
            else if (mod.majorPatchVersion >= 92)
            {
                installer.gpk("85/S1UIRES_Skin.gpk");
                installer.gpk("90/S1UIRES_Component.gpk");
                installer.gpk("91/S1UIRES_Atlas.gpk");
            }
            else if (mod.majorPatchVersion >= 90)
            {
                installer.gpk("85/S1UIRES_Skin.gpk");
                installer.gpk("90/S1UIRES_Component.gpk");
                installer.gpk("86/S1UIRES_Atlas.gpk");
            }
            else if (mod.majorPatchVersion >= 86)
            {
                installer.gpk("85/S1UIRES_Skin.gpk");
                installer.gpk("86/S1UIRES_Component.gpk");
                installer.gpk("86/S1UIRES_Atlas.gpk");
            }
            else if (mod.majorPatchVersion >= 85)
            {
                installer.gpk("85/S1UIRES_Skin.gpk");
                installer.gpk("85/S1UIRES_Component.gpk");
                installer.gpk("85/S1UIRES_Atlas.gpk");
            }
            else
            {
                installer.gpk("83/S1UIRES_Skin.gpk");
                installer.gpk("83/S1UIRES_Component.gpk");
                installer.gpk("83/S1UIRES_Atlas.gpk");
            }
        };
    }
}
