import React from 'react';
import Header from '@/layout/Header/Header';
import styles from './Home.module.scss';
import Filter from '@/components/Fliter/Filter';
import ProductList from '@/components/ProductList/ProductList';
import defaultProducts from '@/data/products-list.json';
import { ProductType } from '@/types/types';
const Home = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('');

  const products = React.useMemo(() => {
    if (selectedCategory) {
      return defaultProducts?.filter(
        (product: ProductType) => product.category?.toLowerCase() === selectedCategory.toLowerCase(),
      );
    } else {
      return defaultProducts;
    }
  }, [selectedCategory]);

  return (
    <div className={styles.container}>
      <Header />
      <div className="centerAligner">
        <div className={styles.content}>
          <Filter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
