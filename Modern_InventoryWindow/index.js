module.exports = function InventoryWindow(m)
{
    if (m.majorPatchVersion >= 85) return;
    m.installGPK("S1UI_InventoryWindow.gpk");
}