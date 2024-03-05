import { Codepen } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CodepenButton() {
  return (
    <Button variant="accent">
      <a href="https://codepen.io/Sava-Stoyanov">
        <Codepen className="h-4 w-4 " />
      </a>
    </Button>
  );
}
