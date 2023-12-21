import React from 'react';
import Header from '@/layout/Header/Header';
import styles from './Home.module.scss';
import Filter from '@/components/Fliter/Filter';
import ProductList from '@/components/ProductList/ProductList';

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className="main_container">
        <div className={styles.content}>
          <Filter />
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Home;
