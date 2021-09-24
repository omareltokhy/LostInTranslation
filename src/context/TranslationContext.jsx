import React, { createContext, useContext, useState } from 'react';

// translation state handler
const TranslationContext = createContext(null)

export const useTranslation = () => {
    return useContext(TranslationContext)
}

const TranslationProvider = ({ children }) => {
    const [translation, setTranslation] = useState('')
    return (
        <TranslationContext.Provider value = {[translation, setTranslation]}>
            { children }
        </TranslationContext.Provider>
    )
}

export default TranslationProvider;