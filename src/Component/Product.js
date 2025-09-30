import { NavLink } from "react-router-dom";
import Formateprice from "../Helper/Formateprice";


const Product=({id,name,image,price,category})=>{

    return(
        <NavLink to={`/singleproduct/${id}`}>
            <div className="card">
                <figure>
                    <img src={image} alt={name} />
                    <figcaption className="caption">{category}</figcaption>
                </figure>
                <div className="card-data">
                    <div className="card-data-flex">
                        <h3>{name}</h3>
                        <p className="card-data--price"><Formateprice price={price}/></p>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default Product;