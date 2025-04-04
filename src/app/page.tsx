import Link from "next/link";
import { Button } from "@/components/ui/button";
import { flashcardItems } from "@/constants/menu";

export default function Home() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">単語カード</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {flashcardItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <Button
              variant="outline"
              className="w-full h-24 text-xl hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {item.title}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
