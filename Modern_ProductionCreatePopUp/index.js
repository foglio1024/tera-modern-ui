exports.ClientMod = class
{
    constructor(mod)
    {
        this.install = function(installer)
        {
            if(mod.clientInterface.arch == 'x64') return;
            mod.warn("This mod will be disabled without showing any warning after 64-bit client patch hits. It will be automatically re-enabled when gpk mods will be supported again an update is released.");

            installer.gpk("S1UI_ProductionCreatePopUp.gpk");
        };
    }
}
