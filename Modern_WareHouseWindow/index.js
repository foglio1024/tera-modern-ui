module.exports = function WareHouseWindow(m)
{
    if (m.majorPatchVersion >= 85)
    {
        m.installGPK("85/S1UI_WareHouseWindow.gpk");
    }
    else
    {
        m.installGPK("83/S1UI_WareHouseWindow.gpk");
    }
}