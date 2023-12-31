// ProductList.tsx
import React, { useState, useRef } from 'react';
import styles from './ProductList.module.scss';
import { ProductType } from '@/types/types';
import ProductCard from '../ProductCard/ProductCard';
import { useAppDispatch } from '@/app/store';
import { addToCart } from '@/features/user/userSlice';

interface ProductListProps {
  products: ProductType[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const dispatch = useAppDispatch();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = 300; // Adjust this value based on your design
      const newPosition = direction === 'left' ? scrollPosition - scrollAmount : scrollPosition + scrollAmount;
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  const addToCartHandler = (product: ProductType) => {
    dispatch(addToCart(product));
  };

  return (
    <div className={styles.productListContainer} ref={containerRef}>
      <div className={styles.productList}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCartHandler={addToCartHandler} />
        ))}
      </div>
      {scrollPosition > 0 && (
        <button className={styles.scrollButton} onClick={() => handleScroll('left')}>
          &lt;
        </button>
      )}
      {containerRef.current && scrollPosition < containerRef.current.scrollWidth - containerRef.current.clientWidth && (
        <button className={styles.scrollButton} onClick={() => handleScroll('right')}>
          &gt;
        </button>
      )}
    </div>
  );
};

export default ProductList;
