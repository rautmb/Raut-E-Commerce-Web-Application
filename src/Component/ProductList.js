import { useCustomeFilterContext } from "../Context/Filtercontext";
import Gridview from "./Gridview";
import Listview from "./Listview";


const ProductList = () => {

    const { filterproducts, grid_view } = useCustomeFilterContext();

    if (grid_view===true) {
        return <Gridview products={filterproducts} />
    }

    if(grid_view===false)
    {
        return <Listview products={filterproducts}/>
    }
}

export default ProductList;