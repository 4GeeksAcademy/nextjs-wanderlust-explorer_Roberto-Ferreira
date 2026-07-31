"use client";

import Link from "next/link";
import type { Experience } from "@/types/experience";
import { useFavorites } from "@/context/FavoritesContext";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { id, title, imageUrl, category, destination, price, rating } =
    experience;
  const { isFavorited, toggleFavorite } = useFavorites();
  const favorited = isFavorited(id);

  const destinationLabel =
    typeof destination === "string"
      ? destination
      : `${destination.city}, ${destination.country}`;

  const categoryColors: Record<string, string> = {
    Adventure: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    Culture: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
    Food: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
    Wellness: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    Nature: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  };

  return (
    <Link
      href={`/experiences/${id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-lg hover:shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-black/20"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Category badge */}
        <span
          className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[category]}`}
        >
          {category}
        </span>
        {/* Favorite toggle */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(id);
          }}
          className={`absolute top-3 right-3 flex size-8 items-center justify-center rounded-full backdrop-blur-sm transition-all ${
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
            className="size-4"
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
      <div className="flex flex-1 flex-col gap-2 p-4">
        {/* Title */}
        <h3 className="text-base font-semibold leading-snug text-zinc-900 group-hover:text-zinc-600 dark:text-zinc-100 dark:group-hover:text-zinc-300">
          {title}
        </h3>

        {/* Destination */}
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {destinationLabel}
        </p>

        {/* Price and rating */}
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
            ${price}
          </span>
          <div className="flex items-center gap-1">
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
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}