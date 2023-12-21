import React from 'react';
import styles from './Header.module.scss'; // Replace with the correct path
import SearchInput from '@/components/SearchInput/SearchInput';
import Cart from '@/components/Cart/Cart';

interface HeaderProps {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ setSearchValue }) => {
  return (
    <div className={styles.searchHeader}>
      <div className={`centerAligner ${styles.header_container}`}>
        <SearchInput setSearchValue={setSearchValue} />
        <Cart />
      </div>
    </div>
  );
};

export default Header;
