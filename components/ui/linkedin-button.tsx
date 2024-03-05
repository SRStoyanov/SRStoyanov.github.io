import { Linkedin } from "lucide-react";

import { Button } from "@/components/ui/button";

export function LinkedInButton() {
  return (
    <Button variant="accent">
      <a href="https://www.linkedin.com/in/sava-stoyanov/">
        <Linkedin className="h-4 w-4 " />
      </a>
    </Button>
  );
}
