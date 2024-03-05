import { Github } from "lucide-react";

import { Button } from "@/components/ui/button";

export function GithubButton() {
  return (
    <Button variant="accent">
      <a href="https://github.com/SRStoyanov">
        <Github className="h-4 w-4 " />
      </a>
    </Button>
  );
}
