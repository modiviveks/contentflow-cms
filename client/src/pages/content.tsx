import { useState } from "react";
import { ContentTable, ContentItem } from "@/components/content-table";
import { EmptyState } from "@/components/empty-state";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Search, FileText } from "lucide-react";

//todo: remove mock functionality
const mockContent: ContentItem[] = [
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
  {
    id: "5",
    title: "Modern Web Performance",
    author: "Jane Smith",
    status: "published",
    category: "Performance",
    updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
  },
  {
    id: "6",
    title: "Database Design Principles",
    author: "Charlie Brown",
    status: "draft",
    category: "Backend",
    updatedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
  },
];

export default function Content() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  //todo: remove mock functionality
  const filteredContent = mockContent.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Content</h1>
          <p className="text-muted-foreground mt-2">
            Manage all your articles and posts
          </p>
        </div>
        <Button data-testid="button-create-article">
          <Plus className="h-4 w-4 mr-2" />
          Create Article
        </Button>
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
            data-testid="input-search"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]" data-testid="select-status-filter">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="scheduled">Scheduled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {filteredContent.length > 0 ? (
        <ContentTable
          items={filteredContent}
          onView={(id) => console.log("View article:", id)}
          onEdit={(id) => console.log("Edit article:", id)}
          onDelete={(id) => console.log("Delete article:", id)}
        />
      ) : (
        <EmptyState
          icon={FileText}
          title="No articles found"
          description="Try adjusting your search or filters to find what you're looking for."
          actionLabel="Create Article"
          onAction={() => console.log("Create article")}
        />
      )}
    </div>
  );
}
