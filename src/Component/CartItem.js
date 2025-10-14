import React from "react";
import Formateprice from "../Helper/Formateprice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCustomecartcontext } from "../Context/Cartcontext";

const CartItem = ({ id, name, color, amount, price, image }) => {
    const{removeItem}=useCustomecartcontext();
    //const [amount, setAmount] = useState(1);

    const setIncrease = () => {
        // amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }

    const setDecrease = () => {
        // amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }
    return (
        <div className="cart_heading grid grid-five-column">
            <div className="cart-image--name">
                <div>
                    <figure>
                        <img src={image} alt={id} />
                    </figure>
                </div>
                <div>
                    <p>{name}</p>
                    <div className="color-div">
                        <p>color</p>
                        <div className="color-style" style={{ backgroundColor: color, color: color }}></div>
                    </div>
                </div>
            </div>
            {/* price */}
            <div className="cart-hide">
                <p><Formateprice price={price} /></p>
            </div>
            {/* Quantity */}
            <CartAmountToggle amount={amount} setIncrease={setIncrease} setDecrease={setDecrease} />

            {/* subtotal */}
            <div className="cart-hide">
                <p><Formateprice price={price * amount} /></p>
            </div>

            {/* remove */}
            <div className="remove_icon">
                <FaTrash onClick={()=>removeItem(id)} />
            </div>
        </div>
    )
}

export default CartItem;