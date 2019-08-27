module.exports = function MiniMap(m) {
    if (m.majorPatchVersion >= 85)
    {
        m.warn('Mod disabled due to incompatibility with current patch. Wait for an update by the developer.');
        return;
    }
    m.installGPK("S1UI_MiniMap.gpk");
}