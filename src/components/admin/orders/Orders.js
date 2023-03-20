import React from "react";
import { getWebsites } from "../../../firebase/api";
import { WebsiteCard } from "../../../pages/cart/WebsiteCard";
import { useEffect } from "react";
import { useState } from "react";



    
    //import useFetchCollection from "../../../customHooks/useFetchCollection";

    //import Loader from "../../loader/Loader";
    //import styles from "./Order.module.scss";

const Orders = () => {
        const [websites, setWebsites] = useState([]);

    const getLinks = async () => {
        const querySnapshot = await getWebsites();
        // onGetLinks((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
        });
        setWebsites(docs);
        // });
    };

    useEffect(() => {
        getLinks();
    }, []);
        //const { data, isLoading } = useFetchCollection("orders");


        //const dispatch = useDispatch();


        /*useEffect(() => {
            dispatch(STORE_ORDERS(data));
        }, [dispatch, data]);*/

        return (
            <>
                {websites.map((link) => (
                    <div className="col-md-4" key={link.id}>
                        <WebsiteCard link={link} />
                    </div>
                ))}
            </>
        );
    };

    export default Orders;