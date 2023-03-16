import React, { useState } from "react";
import styles from "./Search.module.scss";
import { BiSearch } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//import { selectFilteredProducts } from "../../redux/slice/filterSlice";

const Search = () => {
  const navigate = useNavigate();
  const { products } = useSelector((store) => store.product);
  console.log("prueba", products);
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const filterProducts = () => {
    console.log(value);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLocaleLowerCase())
    );
    console.log(filtered);
    if (filtered.length === 0) {
      return <p>No se encontraron productos</p>;
    } else {
      return (
        <div>
          <img
            src={filtered[0].imageURL}
            alt="imagen"
            onClick={() => {
              navigate(`/details/${filtered[0].name}`);
            }}
          />
          <h2>{filtered[0].name}</h2>
        </div>
      );
    }
  };
  return (
    <div>
        <div className={styles.search}>
        <BiSearch size={18} className={styles.icon} />

        <input
          type="text"
          placeholder="Buscar"
          value={value}
          onChange={handleChange}
        />
      </div>
    <section>
      

      {!value
        ? products.map((products) => (
            <div className="containerCard">
              <div className="card">
                <img
                  className="CardImg"
                  src={products.imageURL}
                  alt="imagen"
                  onClick={() => {
                    navigate(`/details/${products.name}`);
                  }}
                />
                <h4>{products.name}</h4>
              </div>
            </div>
          ))
        : filterProducts()}
    </section>
    </div>
  );
};

export default Search;
