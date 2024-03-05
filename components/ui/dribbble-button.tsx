import { Dribbble } from "lucide-react";

import { Button } from "@/components/ui/button";

export function DribbbleButton() {
  return (
    <Button variant="accent">
      <a href="https://dribbble.com/SavaStoyanov">
        <Dribbble className="h-4 w-4 " />
      </a>
    </Button>
  );
}
