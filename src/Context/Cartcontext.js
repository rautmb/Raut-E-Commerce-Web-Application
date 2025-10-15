import { type } from "@testing-library/user-event/dist/type";
import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from '../reducer/Cartreducer'

const Cartcontextdata = createContext();

//for local storage
const getLocaldata = () => {
    let localdata = localStorage.getItem("RautStore");

    if (!localdata) {
        // if null or empty string, return empty array
        return [];
    } else {
        try {
            return JSON.parse(localdata);
        } catch (error) {
            console.error("Error parsing localStorage data:", error);
            return [];
        }
    }
};
const initialstate = {
    //cart: [],
    cart: getLocaldata(),
    total_price: "",
    total_item: "",
    shipping_fee: 5000,
};

const Cartcontext = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialstate)

    const addtocart = (id, amount, color, product) => {
        console.log("AddToCart called with:", { id, amount, color, product });
        dispatch({ type: "Add_To_Cart", payload: { id, amount, color, product } })
    };

    //remove data
    const removeItem = (id) => {
        dispatch({ type: "remove_item", payload: id })
    }

    //clear all filter data
    const clearCartdata = () => {
        dispatch({ type: "clear_filterdata" });
    }

    //increment and decrement quantity

    const setIncrease = (id) => {
        dispatch({ type: "increment_quantity", payload: id });
    }


    const setDecrease = (id) => {
        dispatch({ type: "decrease_quantity", payload: id });
    }

    //storing the data item after refreshing the page
    useEffect(() => {
        dispatch({ type: "total_cartitem" });
        dispatch({ type: "total_price" });
        localStorage.setItem("RautStore", JSON.stringify(state.cart));
    }, [state.cart])

    return (
        <Cartcontextdata.Provider value={{ ...state, addtocart, removeItem, clearCartdata, setIncrease, setDecrease }}>
            {children}
        </Cartcontextdata.Provider>
    )
}

export const useCustomecartcontext = () => {
    return useContext(Cartcontextdata);
}

export default Cartcontext;
