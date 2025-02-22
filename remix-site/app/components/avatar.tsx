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
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-red-500',
    'bg-orange-500'
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