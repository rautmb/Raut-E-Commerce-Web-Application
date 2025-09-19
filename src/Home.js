import React from "react";
import Herosection from "./Component/Herosection";
import Services from "./Component/Services";
import Trusted from "./Component/Trusted";

const Home = () => {

    const data={
        name:'Raut Store'
    }

    return (
        <>
           <Herosection mydata={data}/>
           <Services/>
           <Trusted/>
        </>
    )
};

export default Home;