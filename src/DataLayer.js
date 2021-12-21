import React, {createContext, useContext, useReducer} from "react";


//preparing the data layer
export const DataLayerContext = createContext();

//children is the app.js component which is wrapped inside the datalayer

export const DataLayer = ({initialState, reducer, children}) => (

    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);