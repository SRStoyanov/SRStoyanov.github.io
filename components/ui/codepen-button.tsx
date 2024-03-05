import { Codepen } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CodepenButton() {
  return (
    <Button variant="accent">
      <Codepen className="h-4 w-4 " />
    </Button>
  );
}
