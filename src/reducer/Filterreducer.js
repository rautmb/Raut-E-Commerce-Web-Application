

const Filterreducer = (state, action) => {

    switch (action.type) {
        case 'filter_loading':
            let priceArr = action.payload.map((curElem) => curElem.price);


            let maxPrice = Math.max(...priceArr);
            return {
                ...state,
                filterproducts: [...action.payload],
                allproducts: [...action.payload],
                filters: { ...state.filters, maxPrice, price: maxPrice },
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

        //dropdown select 
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



        //input filter type
        case 'update_filtervalue':
            const { name, value } = action.payload;

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,

                }
            }

        //input filter section
        case "filter_products":
            const { allproducts } = state;
            let tempfilterproducts = [...allproducts];
            const { text, category, company, color, price } = state.filters;

            if (text) {
                tempfilterproducts = tempfilterproducts.filter((v) => {
                    return v.name.toLowerCase().includes(text);
                })
            }

            if (category !== "all") {
                tempfilterproducts = tempfilterproducts.filter((v) => {
                    return v.category === category;
                })
            }

            if (company !== "all") {
                tempfilterproducts = tempfilterproducts.filter((v) => {
                    return v.company.toLowerCase() === company.toLowerCase();
                })
            }

            if (color !== "all") {
                tempfilterproducts = tempfilterproducts.filter((v) => {
                    return v.colors.includes(color);
                })
            }

            if (price === 0) {
                tempfilterproducts = tempfilterproducts.filter((v) => {
                    return v.price == price;
                })
            }
            else {
                tempfilterproducts = tempfilterproducts.filter((v) => {
                    return v.price <= price;
                })
            }

            return {
                ...state,
                filterproducts: tempfilterproducts,
            }

        case "clear_filter":

            return {
                ...state,

                filters: {
                    ...state.filters,
                    text: "",
                    category: 'all',
                    company: 'all',
                    color: 'all',
                    maxPrice: 0,
                    price: state.filters.maxPrice,
                    minPrice: state.filters.maxPrice,
                },
            }

        default:
            return state

    }
}

export default Filterreducer;