module.exports = function Resources(m)
{
    if (m.majorPatchVersion >= 86)
    {
        m.installGPK("85/S1UIRES_Skin.gpk");
        m.installGPK("86/S1UIRES_Component.gpk");
        m.installGPK("86/S1UIRES_Atlas.gpk");
    }
    else if (m.majorPatchVersion >= 85)
    {
        m.installGPK("85/S1UIRES_Skin.gpk");
        m.installGPK("85/S1UIRES_Component.gpk");
        m.installGPK("85/S1UIRES_Atlas.gpk");
    }
    else
    {
        m.installGPK("83/S1UIRES_Skin.gpk");
        m.installGPK("83/S1UIRES_Component.gpk");
        m.installGPK("83/S1UIRES_Atlas.gpk");
    }
}