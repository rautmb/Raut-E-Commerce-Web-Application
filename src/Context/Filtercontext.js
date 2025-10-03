import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductcontext } from "./Productcontext";
import { type } from "@testing-library/user-event/dist/type";
import reducer from '../reducer/Filterreducer'

const filter_context = createContext();

const initialstate={
    filterproducts:[],
    allproducts:[],
}

const Filtercontext = ({ children }) => {

    const { Products } = useProductcontext();

    const[state,dispatch]=useReducer(reducer,initialstate);

    useEffect(()=>{
        dispatch({type:'filter_loading',payload:Products});
    },[Products])

    return (
        <filter_context.Provider value={{ ...state }}>
            {children}
        </filter_context.Provider>
    )
}

export const useCustomeFilterContext= () => {
    return useContext(filter_context);
}

export default Filtercontext;