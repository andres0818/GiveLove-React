import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/product/Product";
import Search from "../../components/search/Search";
import Slider from "../../components/slider/Slider";
import { getProduct } from "../../redux/actions/actionProduct";

const Home = () => {
  //const url = window.location.href;
  const dispatch = useDispatch();
  const {products} = useSelector((store) => store.product);
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
      <Search/>
      {/* <Product /> */}
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex aspernatur quos adipisci nihil harum, vitae aliquid, amet inventore quasi obcaecati fugiat maxime quam! Assumenda voluptatum quis aperiam blanditiis quia saepe.</p>
      {/* {products.map((products) => (
          <div>
            <img
              src={products.imageURL}
              alt="imagen"
            />
            <h2>{products.name}</h2>
          </div>
        ))} */}
        <h1>hola</h1>
    </div>
  );
};

export default Home;