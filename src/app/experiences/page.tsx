"use client";

import { Suspense } from "react";
import ExperienceCard from "@/components/ExperienceCard";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import { useExperiences } from "@/hooks/useExperiences";

function ExplorerContent() {
  const {
    experiences,
    filterState,
    setSearch,
    setCategory,
    setDestination,
    hasActiveFilters,
    totalCount,
    resultCount,
  } = useExperiences();

  return (
    <main className="flex flex-1 flex-col items-center px-6 py-12">
      {/* Page header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Explorer
        </h1>
        <p className="mt-3 text-lg text-zinc-500 dark:text-zinc-400">
          {hasActiveFilters
            ? `${resultCount} of ${totalCount} experiences`
            : `${totalCount} hand-picked experiences curated for you`}
        </p>
      </div>

      {/* Search + Filters */}
      <div className="mb-8 flex w-full max-w-6xl flex-col gap-4">
        <SearchBar value={filterState.search} onChange={setSearch} />
        <FilterBar
          selectedCategory={filterState.category}
          destinationQuery={filterState.destination}
          onCategoryChange={setCategory}
          onDestinationChange={setDestination}
        />
      </div>

      {/* Grid or empty state */}
      {experiences.length > 0 ? (
        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center py-24 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="size-12 text-zinc-300 dark:text-zinc-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            No results found
          </h3>
          <p className="mt-2 max-w-sm text-sm text-zinc-500 dark:text-zinc-400">
            Try adjusting your search or filters to find what you&apos;re looking
            for.
          </p>
          {hasActiveFilters && (
            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
                setDestination("");
              }}
              className="mt-6 rounded-full bg-zinc-100 px-6 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            >
              Clear all filters
            </button>
          )}
        </div>
      )}
    </main>
  );
}

export default function ExplorerPage() {
  return (
    <Suspense
      fallback={
        <main className="flex flex-1 flex-col items-center justify-center px-6 py-12">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Loading…</p>
        </main>
      }
    >
      <ExplorerContent />
    </Suspense>
  );
}