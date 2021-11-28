import React, { createContext, useState } from 'react';

const HelperContext = createContext();

const HelperContextProvider = ({ children }) => {

  const [collapsed, setCollapsed] = useState(false);


  return (
    <HelperContext.Provider value={{
      collapsed,
      setCollapsed
    }}>
      {children}
    </HelperContext.Provider>
  )
}

export { HelperContext, HelperContextProvider };