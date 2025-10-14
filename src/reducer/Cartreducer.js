import React from "react"

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

    //remove item
    if (action.type === "remove_item") {
        let updatedcart = state.cart.filter((v) =>
            v.id != action.payload
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


    return state;
}

export default Cartreducer;