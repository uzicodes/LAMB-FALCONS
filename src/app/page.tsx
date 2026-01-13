export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-tighter text-blue-500">
          LAMB FALCONS
        </h1>
        <p className="text-xl text-gray-400">
          Club Website - Deployment Test
        </p>
        <div className="mt-8 p-4 border border-white/20 rounded-lg bg-white/5">
          <p className="font-mono text-green-400">Status: System Online</p>
        </div>
      </div>
    </main>
  );
}