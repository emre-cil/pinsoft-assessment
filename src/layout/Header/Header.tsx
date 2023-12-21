// SearchHeader.js

import React from 'react';
import styles from './Header.module.scss'; // Replace with the correct path
import SearchInput from '@/components/SearchInput/SearchInput';
import Cart from '@/components/Cart/Cart';

function Header() {
  return (
    <div className={styles.searchHeader}>
      <div className={`main_container ${styles.header_container}`}>
        <SearchInput />
        <Cart />
      </div>
    </div>
  );
}

export default Header;
