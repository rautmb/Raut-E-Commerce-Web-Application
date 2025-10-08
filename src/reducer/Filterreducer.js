

const Filterreducer = (state, action) => {

    switch (action.type) {
        case 'filter_loading':
            return {
                ...state,
                filterproducts: [...action.payload],
                allproducts: [...action.payload]
            }

        case 'send_gridview':
            return {
                ...state,
                grid_view: true
            }

        case 'send_listview':
            return {
                ...state,
                grid_view: false
            }

        case 'sorting_data':
            let usersortvalue = document.getElementById('sort');
            let sortvalue = usersortvalue.options[usersortvalue.selectedIndex].value;
            return {
                ...state,
                sorting_value: sortvalue
            }

        case 'sort_the_products':
            let newSortData;
            // let tempSortProduct = [...action.payload];

            const { filterproducts, sorting_value } = state;
            let tempSortProduct = [...filterproducts];

            const sortingProducts = (a, b) => {
                if (sorting_value === "lowest") {
                    return a.price - b.price;
                }

                if (sorting_value === "highest") {
                    return b.price - a.price;
                }

                if (sorting_value === "a-z") {
                    return a.name.localeCompare(b.name);
                }

                if (sorting_value === "z-a") {
                    return b.name.localeCompare(a.name);
                }
            };

            newSortData = tempSortProduct.sort(sortingProducts);

            return {
                ...state,
                filterproducts: newSortData,
            }


        case 'update_filtervalue':
            const { name, value } = action.payload;

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,

                }
            }

            case "filter_products":
                const{allproducts}=state;
                let tempfilterproducts=[...allproducts];
                const{text}=state.filters;

                if(text)
                {
                   tempfilterproducts=tempfilterproducts.filter((v)=>{
                    return v.name.toLowerCase().includes(text);
                   }) 
                }
                return {
                ...state,
                filterproducts: tempfilterproducts,
            }

        default:
            return state

    }
}

export default Filterreducer;