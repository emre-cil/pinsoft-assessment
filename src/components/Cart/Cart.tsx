import React from 'react';
import { Icon } from '@iconify/react';
import styles from './Cart.module.scss';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { addToCart, reduceFromCart, removeFromCart } from '@/features/user/userSlice';

const Cart = () => {
  const dispatch = useAppDispatch();
  const carts = useAppSelector((state) => state.user.cart);
  const [isPopupOpen, setPopupOpen] = React.useState(false);

  console.log('carts', carts);
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
        {carts.length > 0 && <div className={styles.badge}>{carts.length}</div>}
      </div>

      {isPopupOpen && (
        <div className={styles.popup}>
          <div className={styles.productList}>
            {carts.map((product: any, index: number) => (
              <div key={index} className={styles.product}>
                <img src={product.image} alt={product.name} className={styles.productImage} />
                <div className={styles.productDetails}>
                  <div className={styles.productName}>{product.title}</div>
                  <div className={styles.productCountables}>
                    <div className={styles.productCount}>
                      <button className={styles.countButton} onClick={() => dispatch(reduceFromCart(product))}>
                        -
                      </button>
                      <span className={styles.count}>{product.count}</span>
                      <button className={styles.countButton} onClick={() => dispatch(addToCart(product))}>
                        +
                      </button>
                    </div>
                    <div className={styles.productPrice}> ${product.price * product.count}</div>
                  </div>
                </div>
                <Icon
                  onClick={() => dispatch(removeFromCart(product))}
                  icon="mdi:remove"
                  className={styles.removeButton}
                />
              </div>
            ))}
          </div>

          {carts.length > 0 ? (
            <button className={styles.checkoutButton}>Go to Checkout</button>
          ) : (
            <div className={styles.emptyCart}>Cart is Empty</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
