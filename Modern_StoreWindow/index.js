exports.ClientMod = class
{
    constructor(mod)
    {
        this.install = function(installer)
        {
            if(mod.clientInterface.arch == 'x64') return;
            if (mod.majorPatchVersion >= 90)
            {
                mod.warn('Mod disabled due to incompatibility with current patch. Wait for an update by the developer.');
                return;
            }
            installer.gpk("S1UI_StoreWindow.gpk");
        };
    }
}