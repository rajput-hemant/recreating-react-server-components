export function Loader({ className }: { className?: string }) {
  return (
    <div className={className}>
      <span className="sr-only">Loading...</span>
      <div className="aspect-square h-16 animate-spin rounded-full border-y-2 border-primary lg:h-32" />
    </div>
  );
}
