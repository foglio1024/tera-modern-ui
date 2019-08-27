module.exports = function Resources(m) {
    if (m.majorPatchVersion >= 85)
    {
        m.warn('Mod disabled due to incompatibility with current patch. Wait for an update by the developer.');
        return;
    }

    m.installGPK("S1UIRES_Skin.gpk");
    m.installGPK("S1UIRES_Component.gpk");
    m.installGPK("S1UIRES_Atlas.gpk");
}