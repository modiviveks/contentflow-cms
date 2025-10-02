import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, FolderOpen } from "lucide-react";

export interface CategoryItem {
  id: string;
  name: string;
  description?: string;
  articleCount: number;
  color?: string;
}

interface CategoryCardProps {
  category: CategoryItem;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export function CategoryCard({ category, onEdit, onDelete }: CategoryCardProps) {
  return (
    <Card data-testid={`card-category-${category.id}`} className="hover-elevate">
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
        <div className="flex items-center gap-2 flex-1 overflow-hidden">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent">
            <FolderOpen className="h-4 w-4 text-accent-foreground" />
          </div>
          <CardTitle className="text-base truncate">{category.name}</CardTitle>
        </div>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit?.(category.id)}
            data-testid={`button-edit-category-${category.id}`}
          >
            <Edit className="h-4 w-4" />
            <span className="sr-only">Edit</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete?.(category.id)}
            data-testid={`button-delete-category-${category.id}`}
          >
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Delete</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {category.description && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {category.description}
          </p>
        )}
        <Badge variant="secondary" data-testid={`badge-count-${category.id}`}>
          {category.articleCount} {category.articleCount === 1 ? 'article' : 'articles'}
        </Badge>
      </CardContent>
    </Card>
  );
}
