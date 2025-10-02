import { StatCard } from '../stat-card';
import { FileText } from 'lucide-react';

export default function StatCardExample() {
  return (
    <div className="p-8">
      <StatCard
        title="Total Articles"
        value="45"
        description="Published content"
        icon={FileText}
        trend={{ value: "12%", positive: true }}
      />
    </div>
  );
}
