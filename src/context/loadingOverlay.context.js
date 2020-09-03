import React, { createContext, useState } from 'react';

export const OverlayContext = createContext({ isActive: true, toggleOverlay: () => null });

const OverlayProvider = ({ children }) => {

    const [isActive, setState] = useState(true);

    const toggleOverlay = (value) => {
        setState(value)
    }

    return (
        <OverlayContext.Provider value={{ isActive: isActive, toggleOverlay }}>
            {children}
        </OverlayContext.Provider>
    )
}

export default OverlayProvider;