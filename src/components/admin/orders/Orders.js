import React from "react";
import { getWebsites } from "../../../firebase/api";
import { WebsiteCard } from "../../../pages/cart/WebsiteCard";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./Order.module.scss";
import { deleteWebsite } from "../../../firebase/api";
import { toast } from "react-toastify";

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
  const onDeleteLink = async (id) => {
    if (window.confirm("are you sure you want to delete this link?")) {
      await deleteWebsite(id);
      toast("Link Removed Successfully", {
        type: "error",
        autoClose: 2000,
      });
    }
  };
  //const { data, isLoading } = useFetchCollection("orders");

  //const dispatch = useDispatch();

  /*useEffect(() => {
            dispatch(STORE_ORDERS(data));
        }, [dispatch, data]);*/

  return (
    <div className={styles.base}>

      <div className={styles.cartamigos}>
        {websites.map((link) => (
          // <div  key={link.id}>
          <div className={styles.carticas}>
            <p>{link.name}</p>
            <p>{link.telefono}</p>
            <p>{link.social}</p>
            <p>{link.url}</p>
            <p>{link.description}</p>
            {/* <WebsiteCard link={link} /> */}
            <button
              className={styles.eliminar}
              onClick={(e) => {
                e.stopPropagation();
                onDeleteLink(link.id);
              }}
            >
              <i>x</i>
            </button>
          </div>

          // </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
