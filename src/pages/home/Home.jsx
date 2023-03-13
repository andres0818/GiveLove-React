import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import Product from "../../components/product/Product";
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
      {/* //<Product /> */}
      <Search/>
      
    </div>
  );
};

export default Home;