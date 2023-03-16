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
      <section className={styles.containerIcon}>
        <div className={styles.info}>
          <div className={styles.info_cards}>
            <img src="https://cdn-icons-png.flaticon.com/512/2654/2654507.png" />
            <h3 className={styles.text_success}>Aliados</h3>
            <span className={styles.info_text}>
              <p>
                Trabajamos en favor de la población vulnerable y deseamos que
                puedan acceder a artículos de segunda mano que a otras personas
                ya no le son útiles y desean donarlo a fundaciones.
              </p>
            </span>
          </div>
          <div className={styles.info_cards}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcAkVyO71ipJURfAM2gZkwuXbxGIWs3P-Jf6S-c8Hm91GgzQ5owZWHwwXy9dOvo9a5eg8&usqp=CAU" />
            <h3 className={styles.text_success}>
              Algunos beneficios de donar:
            </h3>
            <span className={styles.info_text}>
              <p>
                <br></br>
                1. Donar articulos ayuda al medio ambiente.
                <br />
                2. Le hace mucho bien a aquellos que lo necesitan
                <br />
                3. Desarrolla la generosidad
              </p>
            </span>
          </div>
          <div className={styles.info_cards}>
            <img src="https://cdn-icons-png.flaticon.com/512/1031/1031929.png" />
            <h3 className={styles.text_success}>¿Qué es ser voluntario?</h3>
            <span className={styles.info_text}>
              <p>
                El voluntariado es una persona que busca ser más humana en su
                relación con los demás. “ (PVE, 2006, p41)
              </p>
            </span>
          </div>
        </div>
      </section>
      <div className={styles.title}>
        <h2>Organizaciones Aliadas</h2>
      </div>
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
              <div className={styles.containerCard}>
                <div className={styles.carta}>
                  <img
                    className={styles.CardImg}
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
