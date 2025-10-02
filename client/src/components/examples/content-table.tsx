import { ContentTable } from '../content-table';

export default function ContentTableExample() {
  const items = [
    {
      id: '1',
      title: 'Getting Started with React',
      author: 'Jane Smith',
      status: 'published' as const,
      category: 'Tutorial',
      updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },
    {
      id: '2',
      title: 'Advanced TypeScript Patterns',
      author: 'John Doe',
      status: 'draft' as const,
      category: 'Guide',
      updatedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
    },
  ];

  return (
    <div className="p-8">
      <ContentTable
        items={items}
        onView={(id) => console.log('View', id)}
        onEdit={(id) => console.log('Edit', id)}
        onDelete={(id) => console.log('Delete', id)}
      />
    </div>
  );
}
