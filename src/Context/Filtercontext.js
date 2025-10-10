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
        category: 'all',
        company: 'all',
        color: 'all',
        maxPrice: 0,
        price: 0,
        minPrice: 0,
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

    //Filter function
    const updateFilterValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        return dispatch({ type: "update_filtervalue", payload: { name, value } })
    }

    //clear filter 
    const clearfilter=()=>{
        dispatch({type:'clear_filter'})
    }

    //sort the filter
    useEffect(() => {
        dispatch({ type: 'filter_products' });
        dispatch({ type: 'sort_the_products', payload: Products });
    }, [state.sorting_value, state.filters])

    useEffect(() => {
        dispatch({ type: 'filter_loading', payload: Products });
    }, [Products])

    return (
        <filter_context.Provider value={{ ...state, Setgridview, Setlistview, Sorting, updateFilterValue,clearfilter }}>
            {children}
        </filter_context.Provider>
    )
}

//using customehook we send data
export const useCustomeFilterContext = () => {
    return useContext(filter_context);
}

export default Filtercontext;