module.exports = function WareHouseWindow(m)
{
    if (m.majorPatchVersion > 93)
    {
        m.warn('Mod disabled due to incompatibility with current patch. Wait for an update by the developer.');
        return;
    }
    if (m.majorPatchVersion >= 93)
    {
        m.installGPK("93/S1UI_WareHouseWindow.gpk");
    }
    else if (m.majorPatchVersion >= 85)
    {
        m.installGPK("85/S1UI_WareHouseWindow.gpk");
    }
    else
    {
        m.installGPK("83/S1UI_WareHouseWindow.gpk");
    }
}