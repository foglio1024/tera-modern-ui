module.exports = function SkillWindow_AutoHide(m)
{
    if (m.majorPatchVersion > 93)
    {
        m.warn('Mod disabled due to incompatibility with current patch. Wait for an update by the developer.');
        return;
    }
    else if (m.majorPatchVersion >= 92) 
    {
        m.installGPK("90/S1UI_SkillWindow.gpk");
        m.installGPK("90/S1UI_TestQuickSlot.gpk");
    }
    else
    {
        m.installGPK("86/S1UI_SkillWindow.gpk");
        m.installGPK("86/S1UI_TestQuickSlot.gpk");
    }
}