import React from "react";
import { useTranslation } from "../context/TranslationContext";

// to handle translation
const withTranslation = Component => props => {
    const { translation } = useTranslation()
    
    if(translation !== [])
    return <Component {...props} />
}

export default withTranslation