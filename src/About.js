import React, { useContext } from "react";
import Herosection from "./Component/Herosection";
import { Appcontext, useProductcontext } from "./Context/Productcontext";

const About = () => {

    const {myname} = useProductcontext();

    const data = {
        name: 'Raut Ecommerce'
    }
    return (
        <>
            <h2>{myname}</h2>
            <Herosection mydata={data} />
        </>
    )
}

export default About;