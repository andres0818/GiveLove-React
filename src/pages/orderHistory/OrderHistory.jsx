import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
//import useFetchCollection from "../../customHooks/useFetchCollection";
import { selectUserID } from "../../redux/slice/authSlice";
import { selectOrderHistory, STORE_ORDERS } from "../../redux/slice/orderSlice";
import styles from "./OrderHistory.module.scss";

const OrderHistory = () => {
  // const { data, isLoading } = useFetchCollection("orders");
  // const orders = useSelector(selectOrderHistory);
  // const userID = useSelector(selectUserID);

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(STORE_ORDERS(data));
  // }, [dispatch, data]);

  // const handleClick = (id) => {
  //   navigate(`/order-details/${id}`);
  // };

  // const filteredOrders = orders.filter((order) => order.userID === userID);

  return (
    <div className={styles.nosotros}>
      <h2>Quienes Somos</h2>
      <p>
        En GiveLove creemos en el potencial de los seres humanos y su poder
        transformador.​ Queremos que cada persona tenga la oportunidad de ser su
        mejor versión.​ Por eso, somos intermediarios entre fundaciones que
        ayudan personas y animales en situación de vulnerabilidad y personas que
        deseen realizar alguna donación de elementos de segunda mano para
        impulsar el crecimiento y mejorar la calidad de vida.
      </p>
      <img className={styles.gif} src="https://piensoexisto.com/wp-content/uploads/2022/01/TOP-WinterCoat-1.gif" alt="gif" />
    </div>
  );
};

export default OrderHistory;
