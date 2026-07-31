"use client";

import { useFavorites } from "@/context/FavoritesContext";

export default function ProfilePage() {
  const { favorites } = useFavorites();
  const favoritesCount = favorites.size;

  return (
    <main className="flex flex-1 flex-col items-center px-6 py-12">
      {/* Avatar */}
      <div className="mb-6 flex size-24 items-center justify-center rounded-full bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-12 text-zinc-400 dark:text-zinc-500"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Name */}
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Alex Rivera
      </h1>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
        alex.rivera@example.com
      </p>

      {/* Bio */}
      <p className="mt-6 max-w-md text-center text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
        Curious traveler exploring the world one experience at a time. Based in
        Austin, Texas — always planning the next adventure.
      </p>

      {/* Stats */}
      <div className="mt-10 grid w-full max-w-sm grid-cols-3 gap-4 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="text-center">
          <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            {favoritesCount}
          </p>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            Favorites
          </p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            12
          </p>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            Trips
          </p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            8
          </p>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            Countries
          </p>
        </div>
      </div>

      {/* Member since */}
      <p className="mt-8 text-xs text-zinc-400 dark:text-zinc-500">
        Member since March 2025
      </p>
    </main>
  );
}