import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import useFetchCollection from "../../customHooks/useFetchCollection";
import {
  //GET_PRICE_RANGE,
  selectProducts,
  //STORE_PRODUCTS,
} from "../../redux/slice/productSlice";
import styles from "./Product.module.scss";
import ProductFilter from "./productFilter/ProductFilter";
import ProductList from "./productList/ProductList";
import spinnerImg from "../../assets/spinner.jpg";
import { FaCogs } from "react-icons/fa";
import { getProduct } from "../../redux/actions/actionProduct";
import { useNavigate } from "react-router-dom";
const Product = () => {
  //const { data, isLoading } = useFetchCollection("products");
  const [showFilter, setShowFilter] = useState(false);
  //const products = useSelector(selectProducts);
  //const products = useSelector((state) => state.product.products);

  const {products} = useSelector((store) => store.product);

  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
   
  }, []);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };
  const navigate = useNavigate();
  return (
    <section>
      
        {products.map((products) => (
          <div className="containerCard">
            <div className="card">
            <img className="cardImg"
              src={products.imageURL}
              alt="imagen"
              onClick={() => {
                navigate(`/details/${products.name}`);

              }}
            />
            <h5>{products.name}</h5>
            </div>
          </div>
        ))}
        
    </section>
  );
};

export default Product;
