exports.ClientMod = class 
{
    constructor(mod)
    {
        this.install = function(installer)
        {
            if (mod.clientInterface.info.arch === 'x64') return;
            installer.gpk("S1UI_TradePopup.gpk");
        };
    }
}