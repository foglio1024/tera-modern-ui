exports.ClientMod = class
{
    constructor(mod)
    {
        this.install = function(installer)
        {
            if(mod.clientInterface.arch == 'x64') return;
            installer.gpk("S1UI_ProductionList.gpk");
        };
    }
}
