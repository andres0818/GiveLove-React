import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Home.module.scss";
//import Product from "../../components/product/Product";
import Search from "../../components/search/Search";
import Slider from "../../components/slider/Slider";
import { getProduct } from "../../redux/actions/actionProduct";
import Estadistics from "../../components/estadisticas/Estadistics";


const Home = () => {
  //const url = window.location.href;
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.product);
  console.log(products);
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  // useEffect(() => {
  //   const scrollToProducts = () => {
  //     if (url.includes("#products")) {
  //       window.scrollTo({
  //         top: 700,
  //         behavior: "smooth",
  //       });
  //       return;
  //     }
  //   };
  //   scrollToProducts();
  // }, [url]);

  return (
    <div>
      
      <Slider />
      {/* //<Product /> */}

      <Search />
      <Estadistics />
    </div>
  );
};

export default Home;
