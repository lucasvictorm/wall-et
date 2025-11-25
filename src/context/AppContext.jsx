import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [movimento, setMovimento] = useState([]); // sua variável global

  return (
    <AppContext.Provider value={{ movimento, setMovimento}}>
      {children}
    </AppContext.Provider>
  );
}
