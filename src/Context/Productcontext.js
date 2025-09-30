import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productreducer"
import { type } from "@testing-library/user-event/dist/type";


const Appcontext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialstate = {
    isLoading: false,
    isError: false,
    Products: [],
    FetureProducts: [],
    isSingleLoading:false,
    SingleProduct:{}
}

const Approvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialstate);

    const getproducts = async (url) => {
        dispatch({ type: "LOADING_DATA" });
        try {
            const res = await axios.get(url);
            const products = await res.data;
            console.log(products);
            dispatch({ type: "SEND_DATA", payload: products });
        }
        catch (error) {
            dispatch({ type: "ERROR" });
        }

    }

    //call single api
    const getsingleproducts=async (url)=>{
        dispatch({ type: "Send_Loading_Data" });
        try{
            const res=await axios.get(url);
            const getsingleproduct=await res.data;
            dispatch({type:'Send_singleproduct_data',payload:getsingleproduct})

        }
        catch(error)
        {
             dispatch({ type: "Send_Singleproduct_Error" });
        }
    }

    useEffect(() => {
        getproducts(API);
    }, []);

    let myname = "test";
    return (
        <>
            <Appcontext.Provider value={{ ...state, getsingleproducts }}>
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