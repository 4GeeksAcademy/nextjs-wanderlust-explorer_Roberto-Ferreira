"use client";

import { useEffect, use } from "react";
import Link from "next/link";
import { experiences } from "@/data/experiences";
import type { Destination } from "@/types/experience";
import { useFavorites } from "@/context/FavoritesContext";

function ExperienceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const experience = experiences.find((e) => e.id === id) ?? null;
  const { isFavorited, toggleFavorite } = useFavorites();
  const favorited = experience ? isFavorited(experience.id) : false;

  useEffect(() => {
    if (experience) {
      document.title = `${experience.title} — Wanderlust Explorer`;
    }
    return () => {
      document.title = "Wanderlust Explorer";
    };
  }, [experience]);

  if (!experience) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
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
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <h1 className="mt-6 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Experience not found
        </h1>
        <p className="mt-3 text-zinc-500 dark:text-zinc-400">
          The experience you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link
          href="/experiences"
          className="mt-8 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Browse all experiences
        </Link>
      </main>
    );
  }

  const destinationLabel: string =
    typeof experience.destination === "string"
      ? experience.destination
      : `${(experience.destination as Destination).city}, ${(experience.destination as Destination).country}`;

  const categoryColors: Record<string, string> = {
    Adventure: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    Culture: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
    Food: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
    Wellness: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    Nature: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  };

  return (
    <main className="flex flex-1 flex-col items-center px-6 py-12">
      {/* Back link */}
      <div className="mb-8 w-full max-w-5xl">
        <Link
          href="/experiences"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
              clipRule="evenodd"
            />
          </svg>
          Back to Explorer
        </Link>
      </div>

      {/* Hero image */}
      <div className="relative mb-10 w-full max-w-5xl overflow-hidden rounded-3xl">
        <img
          src={experience.imageUrl}
          alt={experience.title}
          className="aspect-[21/9] w-full object-cover"
        />
        {/* Category badge */}
        <span
          className={`absolute top-4 left-4 rounded-full px-3 py-1.5 text-xs font-semibold ${categoryColors[experience.category]}`}
        >
          {experience.category}
        </span>
        {/* Favorite toggle */}
        <button
          onClick={() => toggleFavorite(experience.id)}
          className={`absolute top-4 right-4 flex size-10 items-center justify-center rounded-full backdrop-blur-sm transition-all ${
            favorited
              ? "bg-pink-100 text-pink-600 dark:bg-pink-900/50 dark:text-pink-300"
              : "bg-white/80 text-zinc-500 hover:bg-white dark:bg-zinc-900/80 dark:text-zinc-400 dark:hover:bg-zinc-900"
          }`}
          aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={favorited ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={2}
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="w-full max-w-3xl">
        {/* Title */}
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          {experience.title}
        </h1>

        {/* Destination & rating row */}
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-4 text-zinc-400 dark:text-zinc-500"
            >
              <path
                fillRule="evenodd"
                d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .757.433 5.744 5.744 0 0 0 .281.14l.018.008.006.003ZM10 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
                clipRule="evenodd"
              />
            </svg>
            {destinationLabel}
          </div>
          <div className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-4 text-amber-400"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                clipRule="evenodd"
              />
            </svg>
            {experience.rating.toFixed(1)}
          </div>
        </div>

        {/* Price */}
        <div className="mt-6 flex items-baseline gap-1">
          <span className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            ${experience.price}
          </span>
          <span className="text-sm text-zinc-400 dark:text-zinc-500">
            per person
          </span>
        </div>

        {/* Description */}
        <p className="mt-8 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
          {experience.description}
        </p>
      </div>
    </main>
  );
}

export default ExperienceDetailPage;