import React, { useEffect, useState } from "react";
import { fetchData } from "../../utils/utils";
import styles from "./ProductList.module.css";
import globals from "../../index.module.css";
import { Link } from "react-router-dom";

const ProductList = ({ products, setProducts, query, setQuery }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const data = await fetchData(`http://localhost:3000/api/items?q=${query}`);
      setProducts(data.items);
      setLoading(false);
    };

    getProducts();
  }, [query, setProducts]);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setQuery(e.target.userQuery.value);
  }

  return (
    <div className={globals.container}>
      <div className={styles["search-container"]}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Buscar productos"
            name="userQuery"
          />
          <button type="submit">Buscar</button>
        </form>
      </div>
      {loading && <p>Cargando...</p>}
      <div className={styles["product-list-container"]}>
        {products.map((item) => (
          <Link
            to={`/product/${item.id}`}
            className={styles["product-info"]}
            key={item.id}
          >
            <img src={item.picture} alt="thumbnail" />
            <div>
              <p>
                {item.price.currency} {item.price.amount}.00
              </p>
              <h2>{item.title}</h2>
            </div>
            <span>{item.city}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
