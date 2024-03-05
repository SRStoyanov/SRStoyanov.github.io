import { Dribbble } from "lucide-react";

import { Button } from "@/components/ui/button";

export function DribbbleButton() {
  return (
    <Button variant="accent">
      <Dribbble className="h-4 w-4 " />
    </Button>
  );
}
