import { Download } from "lucide-react";

export function DownloadLink() {
  return (
    <a href="/Stoyanov-Resume-24.pdf" download>
      <Download className="hidden sm:inline-block mr-2 h-4 w-4" /> Resume
    </a>
  );
}
