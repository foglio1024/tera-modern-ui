module.exports = function GuildWindow(m) {
    if (m.majorPatchVersion > 93)
    {
        m.warn('Mod disabled due to incompatibility with current patch. Wait for an update by the developer.');
        return;
    }
    m.installGPK("S1UI_GuildWindow.gpk");
}