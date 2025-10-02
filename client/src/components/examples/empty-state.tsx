import { EmptyState } from '../empty-state';
import { FileText } from 'lucide-react';

export default function EmptyStateExample() {
  return (
    <div className="p-8">
      <EmptyState
        icon={FileText}
        title="No articles yet"
        description="Get started by creating your first article. Share your ideas with the world."
        actionLabel="Create Article"
        onAction={() => console.log('Create article')}
      />
    </div>
  );
}
