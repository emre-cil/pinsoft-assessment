import React from 'react';
import styles from './SearchInput.module.scss';
import { Icon } from '@iconify/react';

const SearchInput = () => {
  return (
    <div className={styles.input_container}>
      <Icon className={styles.input_icon} icon="material-symbols-light:search" />
      <input type="text" className={styles.input_field} placeholder="Search..." />
    </div>
  );
};

export default SearchInput;
