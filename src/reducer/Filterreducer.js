

const Filterreducer = (state, action) => {

    switch (action.type) {
        case 'filter_loading':
            return {
                ...state,
                filterproducts: [...action.payload],
                allproducts: [...action.payload]
            }

        default:
            return state

    }
}

export default Filterreducer;