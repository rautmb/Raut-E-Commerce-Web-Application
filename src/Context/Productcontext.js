import React, { createContext, useContext } from "react";

const Appcontext = createContext();

const Approvider = ({ children }) => {
    let myname = "test";
    return (
        <>
            <Appcontext.Provider value={myname}>
                {children}
            </Appcontext.Provider>
        </>
    )
}

// use custome hook
const useProductcontext = () => {
    return useContext(Appcontext);
}

export default Approvider;

export { Appcontext, useProductcontext };