import { useState } from "react";
import { cn } from "~/lib/utils";

interface TagCloudProps {
  title: string;
  tags: string[];
  selectedTags: Set<string>;
  onTagToggle: (tag: string) => void;
  formatTag?: (tag: string) => string;
}

export function TagCloud({
  title,
  tags,
  selectedTags,
  onTagToggle,
  formatTag = (tag) => tag,
}: TagCloudProps) {
  const [search, setSearch] = useState("");
  
  const filteredTags = tags.filter((tag) =>
    formatTag(tag).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={`Filter ${title.toLowerCase()}...`}
          className="w-full rounded-md border bg-background px-3 py-2 text-sm"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            Clear
          </button>
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto p-2">
        {filteredTags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagToggle(tag)}
            className={cn(
              "inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold transition-colors",
              selectedTags.has(tag)
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            {formatTag(tag)}
          </button>
        ))}
      </div>
    </div>
  );
} 