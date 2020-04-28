module.exports = function Resources(m)
{
    if (m.majorPatchVersion > 93)
    {
        m.warn('Mod disabled due to incompatibility with current patch. Wait for an update by the developer.');
        return;
    }
    else if (m.majorPatchVersion >= 93)
    {
        m.installGPK("85/S1UIRES_Skin.gpk");
        m.installGPK("93/S1UIRES_Component.gpk");
        m.installGPK("91/S1UIRES_Atlas.gpk");
    }
    else if (m.majorPatchVersion >= 92)
    {
        m.installGPK("85/S1UIRES_Skin.gpk");
        m.installGPK("90/S1UIRES_Component.gpk");
        m.installGPK("91/S1UIRES_Atlas.gpk");
    }
    else if (m.majorPatchVersion >= 90)
    {
        m.installGPK("85/S1UIRES_Skin.gpk");
        m.installGPK("90/S1UIRES_Component.gpk");
        m.installGPK("86/S1UIRES_Atlas.gpk");
    }
    else if (m.majorPatchVersion >= 86)
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