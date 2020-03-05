module.exports = function StoreWindow(m) {
    if (m.majorPatchVersion >= 90)
    {
        m.warn('Mod disabled due to incompatibility with current patch. Wait for an update by the developer.');
        return;
    }
    m.installGPK("S1UI_StoreWindow.gpk");
}