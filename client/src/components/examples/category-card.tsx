import { CategoryCard } from '../category-card';

export default function CategoryCardExample() {
  const category = {
    id: '1',
    name: 'Technology',
    description: 'Articles about latest technology trends and innovations',
    articleCount: 24,
  };

  return (
    <div className="p-8 max-w-sm">
      <CategoryCard
        category={category}
        onEdit={(id) => console.log('Edit category', id)}
        onDelete={(id) => console.log('Delete category', id)}
      />
    </div>
  );
}
