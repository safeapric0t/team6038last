import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  const buttonClass = (isActive: boolean) =>
    `px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
      ? 'bg-neon-purple/20 text-neon-purple border border-neon-purple/40 shadow-[0_0_15px_rgba(168,85,247,0.2)]'
      : 'glass-subtle text-gray-400 hover:text-white hover:border-neon-purple/20'
    }`;

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      <button
        onClick={() => onCategoryChange('all')}
        className={buttonClass(activeCategory === 'all')}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={buttonClass(activeCategory === category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;