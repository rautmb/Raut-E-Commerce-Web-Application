import React from "react";
import Herosection from "./Component/Herosection";
import Services from "./Component/Services";
import Trusted from "./Component/Trusted";
import FetureProduct from "./Component/featureproducts";

const Home = () => {

    const data={
        name:'Raut Store'
    }

    return (
        <>
           <Herosection mydata={data}/>
           <FetureProduct/>
           <Services/>
           <Trusted/>
        </>
    )
};

export default Home;