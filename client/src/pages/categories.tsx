import { useState } from "react";
import { CategoryCard, CategoryItem } from "@/components/category-card";
import { EmptyState } from "@/components/empty-state";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, FolderOpen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

//todo: remove mock functionality
const mockCategories: CategoryItem[] = [
  {
    id: "1",
    name: "Technology",
    description: "Articles about latest technology trends and innovations",
    articleCount: 24,
  },
  {
    id: "2",
    name: "Design",
    description: "UI/UX design principles and best practices",
    articleCount: 18,
  },
  {
    id: "3",
    name: "Backend",
    description: "Server-side development and architecture",
    articleCount: 15,
  },
  {
    id: "4",
    name: "Tutorial",
    description: "Step-by-step guides and tutorials",
    articleCount: 32,
  },
  {
    id: "5",
    name: "Performance",
    description: "Web performance optimization techniques",
    articleCount: 9,
  },
  {
    id: "6",
    name: "Guide",
    description: "Comprehensive guides for developers",
    articleCount: 21,
  },
];

export default function Categories() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryDescription, setNewCategoryDescription] = useState("");

  //todo: remove mock functionality
  const filteredCategories = mockCategories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateCategory = () => {
    console.log("Create category:", { name: newCategoryName, description: newCategoryDescription });
    setIsDialogOpen(false);
    setNewCategoryName("");
    setNewCategoryDescription("");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Categories</h1>
          <p className="text-muted-foreground mt-2">
            Organize your content with categories
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button data-testid="button-create-category">
              <Plus className="h-4 w-4 mr-2" />
              Create Category
            </Button>
          </DialogTrigger>
          <DialogContent data-testid="dialog-create-category">
            <DialogHeader>
              <DialogTitle>Create New Category</DialogTitle>
              <DialogDescription>
                Add a new category to organize your content better.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="e.g., Technology"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  data-testid="input-category-name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  placeholder="Brief description of the category"
                  value={newCategoryDescription}
                  onChange={(e) => setNewCategoryDescription(e.target.value)}
                  data-testid="input-category-description"
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="secondary"
                onClick={() => setIsDialogOpen(false)}
                data-testid="button-cancel"
              >
                Cancel
              </Button>
              <Button onClick={handleCreateCategory} data-testid="button-save-category">
                Create Category
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="max-w-md">
        <Input
          placeholder="Search categories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          data-testid="input-search-categories"
        />
      </div>

      {filteredCategories.length > 0 ? (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onEdit={(id) => console.log("Edit category:", id)}
              onDelete={(id) => console.log("Delete category:", id)}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={FolderOpen}
          title="No categories found"
          description="Create your first category to start organizing your content."
          actionLabel="Create Category"
          onAction={() => setIsDialogOpen(true)}
        />
      )}
    </div>
  );
}
