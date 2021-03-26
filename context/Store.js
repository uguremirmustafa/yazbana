import { createContext, useReducer } from 'react';
import reducers from './Reducers';

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const initialState = { notify: {} };
  const [state, dispatch] = useReducer(reducers, initialState);

  return <MainContext.Provider value={{ state, dispatch }}>{children}</MainContext.Provider>;
};
