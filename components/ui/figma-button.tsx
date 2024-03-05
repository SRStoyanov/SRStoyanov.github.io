import { Figma } from "lucide-react";

import { Button } from "@/components/ui/button";

export function FigmaButton() {
  return (
    <Button variant="outline" size="icon">
      <Figma className="h-4 w-4" />
    </Button>
  );
}
