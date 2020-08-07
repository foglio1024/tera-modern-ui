exports.ClientMod = class
{
    constructor(mod)
    {
        this.install = function(installer)
        {
            if (mod.clientInterface.info.arch === 'x64') return;
            mod.warn("This mod will be disabled without showing any warning after 64-bit client patch hits. It will be automatically re-enabled when gpk mods will be supported again an update is released.");

            if (mod.majorPatchVersion >= 85)
            {
                return;
            }
            installer.gpk("S1UI_MiniMap.gpk");
        };
    }
}
