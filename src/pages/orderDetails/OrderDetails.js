import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
// import useFetchDocument from "../../customHooks/useFetchDocument";
// import spinnerImg from "../../assets/spinner.jpg";
// import styles from "./OrderDetails.module.scss";
const OrderDetails = () => {
    const [order, setOrder] = useState(null);
    const { name } = useParams();
    const dispatch = useDispatch();
    //const { document } = useFetchDocument("orders", id);
    const info = useSelector((store) => store.product);

  


    const getDetail = () => {
        const data = info.products.slice();
        const description = data.find(products => products.name === name)
        setOrder(description)
    }
    useEffect(() => {
        getDetail()
    }, [])

    return (
        <div>
        {
            order ? (
                <div className='cardDetails'>
                    
                        <h2>{order.name}</h2>
                        <h2>{order.category}</h2>
                </div>
            ) : (
                <div>No hay información</div>
            )
        }

    </div>
        // <section>
        //     <div className={`container ${styles.table}`}>
        //         <h2>Order Details</h2>
        //         <div>
        //             <Link to="/order-history">&larr; Back To Orders</Link>
        //         </div>
        //         <br />
        //         {order === null ? (
        //             <img src={spinnerImg} alt="Loading..." style={{ width: "50px" }} />
        //         ) : (
        //             <>
        //                 <p>
        //                     <b>Order ID</b> {order.id}
        //                 </p>
        //                 <p>
        //                     <b>Order Amount</b> ${order.orderAmount}
        //                 </p>
        //                 <p>
        //                     <b>Order Status</b> {order.orderStatus}
        //                 </p>
        //                 <br />
        //                 <table>
        //                     <thead>
        //                         <tr>
        //                             <th>s/n</th>
        //                             <th>Product</th>
        //                             <th>Price</th>
        //                             <th>Quantity</th>
        //                             <th>Total</th>
        //                             <th>Action</th>
        //                         </tr>
        //                     </thead>
        //                     <tbody>
        //                         {order.cartItems.map((cart, index) => {
        //                             const { id, name, price, imageURL, cartQuantity } = cart;
        //                             return (
        //                                 <tr key={id}>
        //                                     <td>
        //                                         <b>{index + 1}</b>
        //                                     </td>
        //                                     <td>
        //                                         <p>
        //                                             <b>{name}</b>
        //                                         </p>
        //                                         <img
        //                                             src={imageURL}
        //                                             alt={name}
        //                                             style={{ width: "100px" }}
        //                                         />
        //                                     </td>
        //                                     <td>{price}</td>
        //                                     <td>{cartQuantity}</td>
        //                                     <td>{(price * cartQuantity).toFixed(2)}</td>
        //                                     <td className={styles.icons}>
        //                                         <Link to={`/review-product/${id}`}>
        //                                             <button className="--btn --btn-primary">
        //                                                 Review Product
        //                                             </button>
        //                                         </Link>
        //                                     </td>
        //                                 </tr>
        //                             );
        //                         })}
        //                     </tbody>
        //                 </table>
        //             </>
        //         )}
        //     </div>
        // </section>
    );
};

export default OrderDetails;