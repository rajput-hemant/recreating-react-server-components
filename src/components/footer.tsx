export function Footer() {
  return (
    <footer className="h-14 container flex items-center justify-center text-sm text-muted-foreground border-t">
      Built by&nbsp;
      <a
        href="https://github.com/rajput-hemant"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-foreground underline underline-offset-4"
      >
        rajput-hemant
      </a>
      . Hosted on&nbsp;
      <a
        href="https://vercel.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-foreground underline underline-offset-4"
      >
        Vercel
      </a>
      . The source code is available on&nbsp;
      <a
        href="https://github.com/rajput-hemant/recreating-react-server-components"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-foreground underline underline-offset-4"
      >
        GitHub
      </a>
      .
    </footer>
  );
}
