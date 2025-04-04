export default function FlashcardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">単語カード</h1>
      {children}
    </div>
  );
}
