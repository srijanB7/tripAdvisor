import { createContext, useState } from "react";
import { data } from "../data/db";

export const TripContext = createContext();

export const TripProvider = ({children}) => {
    const [continents, setContinents] = useState(data.continents);
    return (
        <TripContext.Provider value={{continents}}>
           {children} 
        </TripContext.Provider>
    )
}