import React from 'react';
import styles from './SearchInput.module.scss';
import { Icon } from '@iconify/react';

interface SearchInputProps {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<SearchInputProps> = ({ setSearchValue }) => {
  return (
    <div className={styles.input_container}>
      <Icon className={styles.input_icon} icon="material-symbols-light:search" />
      <input
        type="text"
        className={styles.input_field}
        placeholder="Search..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
