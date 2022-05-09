import { createContext, useContext, useState } from 'react';

const BasicContext = createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <BasicContext.Provider value={{ data, setData }}>
      {children}
    </BasicContext.Provider>
  );
};

const useBasicContext = () => {
  const info = useContext(BasicContext);
  if (info === undefined) {
    throw new Error('Contexting issue.');
  }
  return info;
};

export { ContextProvider, useBasicContext };
