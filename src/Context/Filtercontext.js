import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductcontext } from "./Productcontext";
import { type } from "@testing-library/user-event/dist/type";
import reducer from '../reducer/Filterreducer'

const filter_context = createContext();

const initialstate = {
    filterproducts: [],
    allproducts: [],
    grid_view: true,
    sorting_value: "lowest",
    filters: {
        text: "",
    },
}

const Filtercontext = ({ children }) => {

    const { Products } = useProductcontext();

    const [state, dispatch] = useReducer(reducer, initialstate);


    // for grid view disply
    const Setgridview = () => {
        return dispatch({ type: 'send_gridview' })
    }

    // for list view disply
    const Setlistview = () => {
        return dispatch({ type: 'send_listview' })
    }

    //sorting function
    const Sorting = (event) => {
        let userValue = event.target.value;
        dispatch({ type: "sorting_data", payload: userValue });
    }

    //sort the filter
    useEffect(() => {
        dispatch({ type: 'sort_the_products', payload: Products });
    }, [state.sorting_value])

    useEffect(() => {
        dispatch({ type: 'filter_loading', payload: Products });
    }, [Products])

    return (
        <filter_context.Provider value={{ ...state, Setgridview, Setlistview, Sorting }}>
            {children}
        </filter_context.Provider>
    )
}

export const useCustomeFilterContext = () => {
    return useContext(filter_context);
}

export default Filtercontext;