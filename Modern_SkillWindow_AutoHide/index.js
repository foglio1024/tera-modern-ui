module.exports = function SkillWindow_AutoHide(m)
{
    if (m.majorPatchVersion >= 85)
    {
        m.installGPK("85/S1UI_SkillWindow.gpk");
    }
    else
    {
        m.installGPK("83/S1UI_SkillWindow.gpk");
    }
    m.installGPK("S1UI_TestQuickSlot.gpk");
}