import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      <h2 className="text-2xl font-bold mb-4">Not Found</h2>
      <p className="mb-4">Creating...</p>
      <Link href="/" className="underline">
        Return
      </Link>
    </div>
  );
}
