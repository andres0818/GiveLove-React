import {userGetDataProduct} from "../../customHooks/useFetchCollection"
import {setAllProducts} from "../slice/productSlice"

export const getProduct = () => {
    return async function async (dispach) {
        let totalproducts = await userGetDataProduct ()
        dispach (setAllProducts ({productos:totalproducts})) 
    }
}