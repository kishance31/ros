import React, { createContext, useState } from 'react';

export const SplashScreenContext = createContext({ isActive: true, toggleSplashScreen: () => null });

const SplashScreenProvider = ({ children }) => {

    const [isActive, setState] = useState(true);

    const toggleSplashScreen = (value) => {
        setState(value)
    }

    return (
        <SplashScreenContext.Provider value={{ isActive: isActive, toggleSplashScreen }}>
            {children}
        </SplashScreenContext.Provider>
    )
}

export default SplashScreenProvider;