const Produtreducer = (state, action) => {
    switch (action.type) {
        case "LOADING_DATA":
            return {
                ...state,
                isLoading: true,
            }

        case "SEND_DATA":
            const featureproductdata = action.payload.filter((v, i) => {
                return v.featured === true;
            })
            return {
                ...state,
                isLoading: false,
                Products: action.payload,
                FetureProducts: featureproductdata
            }

        case "ERROR":
            return {
                ...state,
                isError: true,
            }

        default:
            return state;

    }
}

export default Produtreducer;