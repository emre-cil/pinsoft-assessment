// Cart.tsx

import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import styles from './Cart.module.scss';

const Cart = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState<any>([]);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cartIcon} onClick={togglePopup}>
        <Icon
          icon="ion:cart-outline"
          style={{
            color: '#535353',
            fontSize: '20px',
          }}
        />
        {cartProducts.length > 0 && <div className={styles.badge}>{cartProducts.length}</div>}
      </div>

      {isPopupOpen && (
        <div className={styles.popup}>
          <div className={styles.productList}>
            {cartProducts.map((product: any, index: number) => (
              <div key={index} className={styles.product}>
                <img src={product.image} alt={product.name} className={styles.productImage} />
                <div className={styles.productDetails}>
                  <div className={styles.productName}>{product.name}</div>
                  <div className={styles.productCount}>
                    <button className={styles.countButton}>-</button>
                    <span className={styles.count}>{product.count}</span>
                    <button className={styles.countButton}>+</button>
                  </div>
                  <div className={styles.productPrice}>${product.price}</div>
                </div>
                <button className={styles.removeButton}>Remove</button>
              </div>
            ))}
          </div>

          <button className={styles.removeAllButton}>Remove All</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
