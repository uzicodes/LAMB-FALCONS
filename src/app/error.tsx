"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
        <p className="text-gray-400 mb-8 text-sm">{error.message}</p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-full transition-all duration-300"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
