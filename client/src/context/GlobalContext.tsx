import React, { createContext, useContext, useState, ReactNode } from "react";

interface GlobalContextProps {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false);

  return (
    <GlobalContext.Provider value={{ loading, setLoading }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
