import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import globals from '../../index.module.css';
import styles from './productOnly.module.css';
import { fetchData } from '../../utils/utils';

const ProductOnly = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetchData(`http://localhost:3000/api/items/${id}`);
      setProductInfo(response);
    };
    getData();
  }, [id]);

  function handleGoBack() {
    navigate('/');
  }

  return (
    <div className={`${globals.container} ${styles.productInfo}`}>
      {productInfo && (
        <div className={styles.product}>
          <div className={styles.imageContainer}>
            <img src={productInfo.picture} alt="product illustration" />
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.condition}>
              <p>
                {`Condition: ${productInfo.condition} - ${productInfo.sold_quantity} vendidos`}
              </p>
            </div>
            <div className={styles.price}>
              <p>
                {`${productInfo.item.price.currency} ${productInfo.item.price.amount}.00`}
              </p>
            </div>
            <div className={styles.title}>
              <h2>{productInfo.item.title}</h2>
            </div>
            <div className={styles.description}>
              <h3>Descripción del producto</h3>
              <p>{productInfo.description}</p>
            </div>
            <div className={styles.buttonContainer}>
              <button onClick={handleGoBack}>Volver</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductOnly;

