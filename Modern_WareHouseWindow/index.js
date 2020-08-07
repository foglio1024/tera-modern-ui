exports.ClientMod = class
{
    constructor(mod)
    {
        this.install = function(installer)
        {
            if (mod.clientInterface.info.arch === 'x64')
            {
                return;
            }
            else if (mod.majorPatchVersion > 93)
            {
                mod.warn('Mod disabled due to incompatibility with current patch. Wait for an update by the developer.');
                return;
            }
            if (mod.majorPatchVersion >= 93)
            {
                installer.gpk("93/S1UI_WareHouseWindow.gpk");
            }
            else if (mod.majorPatchVersion >= 85)
            {
                installer.gpk("85/S1UI_WareHouseWindow.gpk");
            }
            else
            {
                installer.gpk("83/S1UI_WareHouseWindow.gpk");
            }
        }
    }
}