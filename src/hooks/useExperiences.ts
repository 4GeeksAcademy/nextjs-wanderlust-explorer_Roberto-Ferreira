"use client";

import { useCallback, useMemo } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import type { Category } from "@/types/experience";
import { experiences as allExperiences } from "@/data/experiences";

export interface FilterState {
  search: string;
  category: Category | "All";
  destination: string;
}

export function useExperiences() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // ── Read current values from URL ──
  const search = searchParams.get("search") ?? "";
  const categoryParam = searchParams.get("category") ?? "";
  const destination = searchParams.get("destination") ?? "";

  const category: Category | "All" = (
    ["Adventure", "Culture", "Food", "Wellness", "Nature"] as Category[]
  ).includes(categoryParam as Category)
    ? (categoryParam as Category)
    : "All";

  // ── Setter: update a single param while preserving others ──
  const setFilter = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      // Replace the URL without adding a browser history entry per keystroke
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, pathname, router],
  );

  const setSearch = useCallback(
    (value: string) => setFilter("search", value),
    [setFilter],
  );

  const setCategory = useCallback(
    (value: Category | "All") =>
      setFilter("category", value === "All" ? "" : value),
    [setFilter],
  );

  const setDestination = useCallback(
    (value: string) => setFilter("destination", value),
    [setFilter],
  );

  // ── Derived: currently active filters ──
  const hasActiveFilters = search !== "" || category !== "All" || destination !== "";

  // ── Derived: unique destinations for autocomplete UI ──
  const allDestinations = useMemo((): string[] => {
    const set = new Set<string>();
    for (const exp of allExperiences) {
      if (typeof exp.destination === "string") {
        set.add(exp.destination);
      } else {
        set.add(`${exp.destination.city}, ${exp.destination.country}`);
      }
    }
    return Array.from(set).sort();
  }, []);

  // ── Filtering logic ──
  const filtered = useMemo(() => {
    return allExperiences.filter((exp) => {
      // Search filter (case-insensitive, regex)
      if (search) {
        try {
          const pattern = new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
          if (!pattern.test(exp.title)) return false;
        } catch {
          // If the regex is invalid, fall back to simple includes
          if (!exp.title.toLowerCase().includes(search.toLowerCase())) return false;
        }
      }

      // Category filter
      if (category !== "All" && exp.category !== category) return false;

      // Destination filter (case-insensitive substring match)
      if (destination) {
        const destLabel =
          typeof exp.destination === "string"
            ? exp.destination
            : `${exp.destination.city}, ${exp.destination.country}`;
        if (!destLabel.toLowerCase().includes(destination.toLowerCase())) {
          return false;
        }
      }

      return true;
    });
  }, [search, category, destination]);

  return {
    experiences: filtered,
    allDestinations,
    filterState: { search, category, destination } as FilterState,
    setSearch,
    setCategory,
    setDestination,
    hasActiveFilters,
    totalCount: allExperiences.length,
    resultCount: filtered.length,
  };
}