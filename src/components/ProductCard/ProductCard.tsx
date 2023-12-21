import React from 'react';
import styles from './ProductCard.module.scss';
import { ProductType } from '@/types/types';

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <img src={product.image} alt={product.title} className={styles.productImage} />
      <div className={styles.productDetails}>
        <h3 className={styles.productTitle}>{product.title}</h3>
        <div className={styles.line}></div>
        <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
        <button className={styles.addToCartButton}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
