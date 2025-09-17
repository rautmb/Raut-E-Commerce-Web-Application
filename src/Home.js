import React from "react";
import Herosection from "./Component/Herosection";

const Home = () => {

    const data={
        name:'Raut Store'
    }

    return (
        <>
           <Herosection mydata={data}/>
        </>
    )
};

export default Home;