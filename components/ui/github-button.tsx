import { Github } from "lucide-react";

import { Button } from "@/components/ui/button";

export function GithubButton() {
  return (
    <Button variant="accent">
      <Github className="h-4 w-4 " />
    </Button>
  );
}
