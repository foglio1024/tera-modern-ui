module.exports = function JewelsFix(m) {
    if (m.majorPatchVersion >= 86)
    {
        m.warn('Mod disabled due to incompatibility with current patch. Wait for an update by the developer.');
        return;
    }
    m.installGPK("S1UI_PaperDoll.gpk");
    m.installGPK("S1UI_InventoryWindow.gpk");
    m.installGPK("Icon_Items.gpk");
}