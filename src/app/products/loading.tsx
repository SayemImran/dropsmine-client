export default function Loading() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-950 via-slate-900 to-slate-800 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 h-9 w-56 animate-pulse rounded-full bg-white/10" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-4"
            >
              <div className="h-48 w-full animate-pulse rounded-[18px] bg-white/10" />
              <div className="mt-4 h-5 w-3/4 animate-pulse rounded-full bg-white/10" />
              <div className="mt-2 h-4 w-1/2 animate-pulse rounded-full bg-white/5" />
              <div className="mt-4 flex items-center justify-between">
                <div className="h-6 w-16 animate-pulse rounded-full bg-white/10" />
                <div className="h-8 w-20 animate-pulse rounded-full bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}