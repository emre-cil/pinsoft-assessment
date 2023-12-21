import React from 'react';
import styles from './Filter.module.scss';
import categories from '@/data/categories.json';
import { CategoryType } from '@/types/types';
interface FilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const Filter: React.FC<FilterProps> = ({ selectedCategory, setSelectedCategory }) => {
  const handleClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <div className={styles.container}>
      <label htmlFor="categoryFilter" className={styles.categoryLabel}>
        Filter
      </label>
      <ul className={styles.categoryList}>
        {categories.map((category: CategoryType) => (
          <li
            key={category.id}
            className={`${styles.categoryItem} ${selectedCategory === category.title ? styles.selected : ''}`}
            onClick={() => handleClick(category.title)}
          >
            {category.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
