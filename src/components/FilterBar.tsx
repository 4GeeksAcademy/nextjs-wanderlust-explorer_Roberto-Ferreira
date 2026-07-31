"use client";

import type { Category } from "@/types/experience";

const categories: { label: string; value: Category | "All" }[] = [
  { label: "All", value: "All" },
  { label: "Adventure", value: "Adventure" },
  { label: "Culture", value: "Culture" },
  { label: "Food", value: "Food" },
  { label: "Wellness", value: "Wellness" },
  { label: "Nature", value: "Nature" },
];

interface FilterBarProps {
  selectedCategory: Category | "All";
  destinationQuery: string;
  onCategoryChange: (category: Category | "All") => void;
  onDestinationChange: (value: string) => void;
}

export default function FilterBar({
  selectedCategory,
  destinationQuery,
  onCategoryChange,
  onDestinationChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Category selector */}
      <div className="flex flex-wrap gap-2">
        {categories.map(({ label, value }) => {
          const isActive =
            value === "All"
              ? selectedCategory === "All"
              : selectedCategory === value;

          return (
            <button
              key={value}
              onClick={() => onCategoryChange(value as Category | "All")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Destination input */}
      <div className="relative w-full sm:w-56">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-zinc-400"
        >
          <path
            fillRule="evenodd"
            d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .757.433 5.744 5.744 0 0 0 .281.14l.018.008.006.003ZM10 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="text"
          value={destinationQuery}
          onChange={(e) => onDestinationChange(e.target.value)}
          placeholder="Filter by destination..."
          className="w-full rounded-xl border border-zinc-200 bg-white py-2.5 pr-4 pl-10 text-sm text-zinc-900 placeholder-zinc-400 transition-colors focus:border-zinc-400 focus:outline-none focus:ring-0 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-zinc-600"
        />
      </div>
    </div>
  );
}