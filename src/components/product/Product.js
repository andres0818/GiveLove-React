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
      <div className={`container ${styles.product}`}>
        <aside
          className={
            showFilter ? `${styles.filter} ${styles.show}` : `${styles.filter}`
          }
        >
          {/* {isLoading ? null : <ProductFilter />} */}
        </aside>
        {products.map((products) => (
          <div>
            <img
              src={products.imageURL}
              alt="imagen"
              onClick={() => {
                navigate(`/details/${products.name}`);

              }}
            />
            <h2>{products.name}</h2>
          </div>
        ))}
        <div className={styles.content}>
          
          <div className={styles.icon} onClick={toggleFilter}>
            <FaCogs size={20} color="orangered" />
            <p>
              <b>{showFilter ? "Hide Filter" : "Show Filter"}</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
