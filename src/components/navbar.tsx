import { Link } from "../lib/router";

export function Navbar() {
  return (
    <header className="h-14 border-b sticky top-0 bg-background/50 backdrop-blur-sm">
      <nav className="container flex h-full items-center justify-between">
        <Link href="/" className="font-semibold text-lg flex">
          <div className="animate-bounce">🐶</div>
          <span>oggo</span>
        </Link>

        <input
          placeholder="Enter Your Name..."
          className="flex h-9 w-64 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
      </nav>
    </header>
  );
}
