import { StatCard } from "@/components/stat-card";
import { ContentTable, ContentItem } from "@/components/content-table";
import { FileText, Eye, Edit, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

//todo: remove mock functionality
const mockStats = [
  {
    title: "Total Articles",
    value: 45,
    description: "Published content",
    icon: FileText,
    trend: { value: "12%", positive: true },
  },
  {
    title: "Total Views",
    value: "12.4K",
    description: "This month",
    icon: Eye,
    trend: { value: "8%", positive: true },
  },
  {
    title: "Drafts",
    value: 8,
    description: "Unpublished articles",
    icon: Edit,
    trend: { value: "3", positive: false },
  },
  {
    title: "Scheduled",
    value: 3,
    description: "Posts pending",
    icon: Clock,
  },
];

//todo: remove mock functionality
const mockRecentContent: ContentItem[] = [
  {
    id: "1",
    title: "Getting Started with React 19",
    author: "Jane Smith",
    status: "published",
    category: "Tutorial",
    updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: "2",
    title: "Advanced TypeScript Patterns",
    author: "John Doe",
    status: "draft",
    category: "Guide",
    updatedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
  },
  {
    id: "3",
    title: "Building Scalable APIs",
    author: "Alice Johnson",
    status: "published",
    category: "Backend",
    updatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    id: "4",
    title: "CSS Grid Mastery",
    author: "Bob Wilson",
    status: "scheduled",
    category: "Design",
    updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome back! Here's an overview of your content.
        </p>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {mockStats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Content</CardTitle>
        </CardHeader>
        <CardContent>
          <ContentTable
            items={mockRecentContent}
            onView={(id) => console.log("View article:", id)}
            onEdit={(id) => console.log("Edit article:", id)}
            onDelete={(id) => console.log("Delete article:", id)}
          />
        </CardContent>
      </Card>
    </div>
  );
}
