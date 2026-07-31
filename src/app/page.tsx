import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6">
      {/* Hero section */}
      <section className="flex w-full max-w-4xl flex-col items-center gap-10 py-24 text-center sm:py-32">
        {/* Eyebrow */}
        <span className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
          Wanderlust Labs
        </span>

        {/* Headline */}
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl md:text-6xl dark:text-zinc-50">
          Discover Curated Travel
          <br />
          Experiences Around the
          <br />
          <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
            World
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl text-base leading-relaxed text-zinc-500 sm:text-lg dark:text-zinc-400">
          Hand-picked adventures, cultural deep-dives, culinary journeys, wellness
          retreats, and natural wonders — all vetted by our global community of
          travel curators.
        </p>

        {/* CTA */}
        <Link
          href="/experiences"
          className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-zinc-900/20 transition-all hover:bg-zinc-700 hover:shadow-xl hover:shadow-zinc-900/25 active:scale-[0.98] dark:bg-white dark:text-zinc-900 dark:shadow-white/10 dark:hover:bg-zinc-100"
        >
          Explore Experiences
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>

        {/* Stats row */}
        <div className="mt-4 flex items-center gap-8 divide-x divide-zinc-200 dark:divide-zinc-800">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">100</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">Experiences</span>
          </div>
          <div className="flex flex-col items-center pl-8">
            <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">50+</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">Destinations</span>
          </div>
          <div className="flex flex-col items-center pl-8">
            <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">5</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">Categories</span>
          </div>
        </div>
      </section>

      {/* Categories preview */}
      <section className="w-full max-w-4xl pb-24">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {[
            { label: "Adventure", color: "bg-orange-500" },
            { label: "Culture", color: "bg-violet-500" },
            { label: "Food", color: "bg-rose-500" },
            { label: "Wellness", color: "bg-blue-500" },
            { label: "Nature", color: "bg-emerald-500" },
          ].map(({ label, color }) => (
            <Link
              key={label}
              href="/experiences"
              className="flex flex-col items-center gap-2 rounded-xl border border-zinc-200 p-4 transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:hover:border-zinc-700"
            >
              <span className={`size-3 rounded-full ${color}`} />
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
