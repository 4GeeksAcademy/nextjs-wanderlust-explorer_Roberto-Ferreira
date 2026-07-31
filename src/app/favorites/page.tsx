"use client";

import Link from "next/link";
import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/data/experiences";
import { useFavorites } from "@/context/FavoritesContext";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  const favoriteExperiences = experiences.filter((e) => favorites.has(e.id));
  const count = favoriteExperiences.length;

  return (
    <main className="flex flex-1 flex-col items-center px-6 py-12">
      {/* Page header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Favorites
        </h1>
        <p className="mt-3 text-lg text-zinc-500 dark:text-zinc-400">
          {count > 0
            ? `${count} experience${count === 1 ? "" : "s"} saved`
            : "Your saved travel experiences"}
        </p>
      </div>

      {/* Grid or empty state */}
      {count > 0 ? (
        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {favoriteExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center py-24 text-center">
          {/* Heart icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="size-16 text-zinc-300 dark:text-zinc-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          <h3 className="mt-6 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            No favorites yet
          </h3>
          <p className="mt-3 max-w-sm text-sm text-zinc-500 dark:text-zinc-400">
            Start exploring and tap the heart icon on any experience to save it
            here for later.
          </p>
          <Link
            href="/experiences"
            className="mt-8 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Browse experiences
          </Link>
        </div>
      )}
    </main>
  );
}