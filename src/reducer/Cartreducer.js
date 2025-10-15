
const Cartreducer = (state, action) => {

    if (action.type === "Add_To_Cart") {
        let { id, color, amount, product } = action.payload;

        const uniqueId = color + id;
        console.log("Searching for ID:", uniqueId);
        console.log("Current cart:", state.cart);

        const existingproduct = state.cart.find((v) => v.id === uniqueId);
        console.log("Found existing product:", existingproduct);

        if (existingproduct) {
            const updatedproduct = state.cart.map((v) => {
                if (v.id === uniqueId) {
                    let newamount = v.amount + amount;
                    // if (newamount > v.max) newamount = v.max;
                    return { ...v, amount: newamount };
                }
                return v;
            });

            localStorage.setItem("RautStore", JSON.stringify(updatedproduct));

            return { ...state, cart: updatedproduct };
        } else {
            const cartproduct = {
                id: uniqueId,
                name: product.name,
                color,
                amount,
                image: product.image[0].url,
                price: product.price,
                max: product.stock,
            };

            const newCart = [...state.cart, cartproduct];
            localStorage.setItem("RautStore", JSON.stringify(newCart));

            return { ...state, cart: newCart };
        }
    }

    //quantity decreament
    if (action.type === "decrease_quantity") {
        let updatedCart = state.cart.map((item) => {
            if (item.id === action.payload) {
                let decAmount = item.amount - 1;
                // Optional: prevent amount from going below 1
                if (decAmount < 1) { decAmount = 1; }//at least one item quantity required
                return { ...item, amount: decAmount };
            } else {
                return item;
            }
        });
        return {
            ...state,
            cart: updatedCart
        };
    }

    //quantity increament
    if (action.type === "increment_quantity") {
        let updatedCart = state.cart.map((item) => {
            if (item.id === action.payload) {
                let inAmount = item.amount + 1;
                if (inAmount > item.max) { inAmount = item.max; } // if we have maximum 6 item quantity then only till 6 we increased item quantity
                return { ...item, amount: inAmount };
            } else {
                return item;
            }
        });

        return {
            ...state,
            cart: updatedCart
        };
    }


    //remove item
    if (action.type === "remove_item") {
        let updatedcart = state.cart.filter((v) =>
            v.id !== action.payload
        )
        return {
            ...state,
            cart: updatedcart,
        }
    }

    //clear cart data
    if (action.type === "clear_filterdata") {
        return {
            ...state,
            cart: []
        }
    }

    //total cart item 
    if (action.type === "total_cartitem") {
        let updatedcartitem = state.cart.reduce((initial, currelem) => {
            let { amount } = currelem;

            initial = initial + amount;
            return initial;
        }, 0)
        return {
            ...state,
            total_item: updatedcartitem,
        };
    }

    //total price 
    if (action.type === "total_price") {
        let total_price = state.cart.reduce((initialvalue, currelem) => {
            let { price, amount } = currelem;

            initialvalue = initialvalue + price * amount;
            return initialvalue;
        }, 0)
        return {
            ...state,
            total_price: total_price,
        };
    }

    return state;
}

export default Cartreducer;