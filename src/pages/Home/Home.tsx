import React from 'react';
import Header from '@/layout/Header/Header';
import styles from './Home.module.scss';
import Filter from '@/components/Fliter/Filter';
import ProductList from '@/components/ProductList/ProductList';
import defaultProducts from '@/data/products-list.json';
import { ProductType } from '@/types/types';
import useDebounce from '@/hooks/useDebounce';
const Home = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('');
  const [searchValue, setSearchValue] = React.useState<string>('');
  const debouncedSearchValue = useDebounce(searchValue, 500);

  const products = React.useMemo(() => {
    let prods = [] as ProductType[];
    if (debouncedSearchValue) {
      prods = defaultProducts?.filter(
        (product: ProductType) => product.title?.toLowerCase().includes(debouncedSearchValue.toLowerCase()),
        // || product?.description?.toLowerCase().includes(debouncedSearchValue.toLowerCase()),
      );
    } else {
      prods = defaultProducts;
    }
    if (selectedCategory) {
      return prods?.filter(
        (product: ProductType) => product.category?.toLowerCase() === selectedCategory.toLowerCase(),
      );
    } else {
      return prods;
    }
  }, [selectedCategory, debouncedSearchValue]);

  return (
    <div className={styles.container}>
      <Header setSearchValue={setSearchValue} />
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
