import { cn } from "~/lib/utils";

interface QualitySelectorProps {
  value: number;
  onChange: (value: number) => void;
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        "w-6 h-6 transition-colors",
        filled ? "fill-yellow-500 stroke-yellow-500" : "stroke-muted-foreground"
      )}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function QualitySelector({ value, onChange }: QualitySelectorProps) {
  const labels = {
    1: "Basic",
    2: "Good",
    3: "Solid",
    4: "Great",
    5: "Excellent"
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 p-4 rounded-lg border bg-card/50">
      <div className="flex-shrink-0">
        <h3 className="text-sm font-medium">Minimum Quality</h3>
        <p className="text-xs text-muted-foreground">{labels[value as keyof typeof labels]}</p>
      </div>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((score) => (
          <button
            key={score}
            onClick={() => onChange(score)}
            className={cn(
              "p-1 rounded-md hover:bg-accent",
              value === score && "bg-accent"
            )}
          >
            <StarIcon filled={score <= value} />
          </button>
        ))}
      </div>
    </div>
  );
} 