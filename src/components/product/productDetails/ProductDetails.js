/* eslint-disable jsx-a11y/alt-text */
import styles from "../Product.module.scss";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import spinnerImg from "../../../assets/spinner.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
    ADD_TO_CART,
    CALCULATE_TOTAL_QUANTITY,
    DECREASE_CART,
    selectCartItems,
} from "../../../redux/slice/cartSlice";import useFetchDocument from "../../../customHooks/useFetchDocument";
//import useFetchCollection from "../../../customHooks/useFetchCollection";
import Card from "../../card/Card";
import StarsRating from "react-star-rate";
import { getProduct } from "../../../redux/actions/actionProduct";
import UserContact from "../../../pages/contact/UserContact";

const ProductDetails = () => {

    const [order, setOrder] = useState();
    const { name } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((store) => store.product);
    console.log(product);

    useEffect(() => {
        getDetail()
    }, [])
    const getDetail = () => {
        const dataProduct = product.products.slice();
        const description = dataProduct.find(p => p.name === name);
        setOrder(description)
        console.log(dataProduct);
        console.log(description);
    }

    useEffect(() => {
        dispatch(getProduct());
      }, [dispatch]);
    
   const btnNew =document.getElementById('btnNew')
    return (
        <section>
            {
            order ? (
                <div className='cardDetails'>
                    
                        <h2>{order.name}</h2>
                        <img className="cardImg"
                        src={order.imageURL}/>
                        <h2>{order.category}</h2>
                        <p>{order.descripcion}</p>
                       <UserContact/>
                </div>
            ) : (
                <div>No hay información</div>
            )
        }
        </section>
    );
};

export default ProductDetails;