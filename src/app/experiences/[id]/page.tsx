export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Experience Detail
      </h1>
      <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400">
        Viewing experience <span className="font-mono text-zinc-700 dark:text-zinc-300">{id}</span>.
      </p>
    </main>
  );
}