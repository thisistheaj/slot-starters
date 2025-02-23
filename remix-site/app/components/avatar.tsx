import { cn } from "~/lib/utils";

interface AvatarProps {
  name: string;
  className?: string;
}

export function Avatar({ name, className }: AvatarProps) {
  // Get first letter of first two words
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map(word => word[0])
    .join('')
    .toUpperCase();

  // Generate a deterministic background color based on the name
  const colors = [
    'bg-[#8B4513]', // Saddle Brown
    'bg-[#556B2F]', // Dark Olive Green
    'bg-[#8B7355]', // Light Brown
    'bg-[#6B4423]', // Brown
    'bg-[#6B8E23]', // Olive Drab
    'bg-[#CD853F]', // Peru
    'bg-[#8B6914]', // Dark Goldenrod
    'bg-[#6B4423]', // Russet
  ];
  
  const colorIndex = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
  const bgColor = colors[colorIndex];

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full w-12 h-12 text-white font-semibold text-lg",
        bgColor,
        className
      )}
    >
      {initials}
    </div>
  );
} 