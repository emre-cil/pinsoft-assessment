import React from 'react';
import styles from './Filter.module.scss';
import categories from '@/data/categories.json';
import { CategoryType } from '@/types/types';
import { Icon } from '@iconify/react';
interface FilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const Filter: React.FC<FilterProps> = ({ selectedCategory, setSelectedCategory }) => {
  const [isOpen, setIsOpen] = React.useState(window.innerWidth > 1024);

  const handleClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <div
      className={styles.container}
      style={{
        height: isOpen ? '250px' : '44px',
        transition: 'height 0.3s ease-in-out',
      }}
    >
      <div className={styles.categoryTitle}>
        <label htmlFor="categoryFilter" className={styles.categoryLabel}>
          Filter
        </label>
        <Icon
          icon="mingcute:down-line"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease-in-out',
          }}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
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
