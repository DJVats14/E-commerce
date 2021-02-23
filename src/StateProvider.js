import React, { createContext, useContext, useReducer } from "react";

//prepares the datalayer
export const StateContext = createContext();

//Wrap the app ,thereby providing datalayer/DL access to each component
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//pull info from the data layer
export const useStateValue = () => useContext(StateContext);