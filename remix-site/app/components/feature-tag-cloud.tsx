import { useState } from "react";
import { cn } from "~/lib/utils";

interface FeatureTagCloudProps {
  features: Set<string>;
  selectedTags: Set<string>;
  onTagToggle: (tag: string) => void;
}

type FeatureCategory = {
  name: string;
  icon: React.ReactNode;
  description: string;
};

const featureCategories: Record<string, FeatureCategory> = {
  development: {
    name: "Development",
    icon: "🛠️",
    description: "Development workflow and tooling"
  },
  testing: {
    name: "Testing",
    icon: "🧪",
    description: "Testing and quality assurance"
  },
  deployment: {
    name: "Deployment",
    icon: "🚀",
    description: "Deployment and infrastructure"
  },
  security: {
    name: "Security",
    icon: "🔒",
    description: "Security and authentication"
  }
};

export function FeatureTagCloud({
  features,
  selectedTags,
  onTagToggle,
}: FeatureTagCloudProps) {
  const [search, setSearch] = useState("");
  
  // Group features by category
  const featuresByCategory = Array.from(features).reduce((acc, feature) => {
    const [category, name] = feature.split(".");
    if (!acc[category]) acc[category] = [];
    acc[category].push(name);
    return acc;
  }, {} as Record<string, string[]>);

  // Filter features based on search
  const filteredCategories = Object.entries(featuresByCategory)
    .map(([category, features]) => ({
      category,
      features: features.filter(feature =>
        feature.toLowerCase().includes(search.toLowerCase()) ||
        category.toLowerCase().includes(search.toLowerCase())
      )
    }))
    .filter(({ features }) => features.length > 0);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Features</h3>
      
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Filter features..."
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

      {/* Features by Category */}
      <div className="space-y-6 p-2">
        {filteredCategories.map(({ category, features }) => (
          <div key={category} className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">{featureCategories[category]?.icon}</span>
              <div>
                <h4 className="text-sm font-medium capitalize">
                  {featureCategories[category]?.name || category}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {featureCategories[category]?.description}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {features.map((feature) => (
                <button
                  key={`${category}.${feature}`}
                  onClick={() => onTagToggle(`${category}.${feature}`)}
                  className={cn(
                    "inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold transition-colors",
                    selectedTags.has(`${category}.${feature}`)
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  {feature}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 