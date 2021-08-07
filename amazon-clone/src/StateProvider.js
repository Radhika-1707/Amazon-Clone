import React, {createContext,useContext,useReducer} from "react";
// prepares the dataLayer
export const StateContext= createContext();

//wrapping our App and provides the data layer
export const StateProvider = ({reducer,initialState,children})=> (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//pulling the information from data
export const useStateValue=() => useContext(StateContext);