import React, { createContext, useState } from 'react';

const Context = createContext();

const Provider = ({ children }) => {

  const [value, setValue] = useState({
    userInfo:null,
    coordinate:null
  });

  const setUserInfo = (name)=> setValue({...value, userInfo:{name} });
  const setCoordinate = (latitude, longitude)=> setValue({...value, coordinate:{latitude, longitude} });  
  const actions = { setInfo: setUserInfo, setCoordinate: setCoordinate}
  
  return (
    <Context.Provider value={{ value, actions}}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };