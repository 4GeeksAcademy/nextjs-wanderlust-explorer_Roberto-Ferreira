import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/data/experiences";

export default function ExplorerPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 py-12">
      {/* Page header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Explorer
        </h1>
        <p className="mt-3 text-lg text-zinc-500 dark:text-zinc-400">
          {experiences.length} hand-picked experiences curated for you
        </p>
      </div>

      {/* Responsive grid */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </main>
  );
}