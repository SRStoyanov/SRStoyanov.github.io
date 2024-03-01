import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

export function MailButton() {
  return (
    <Button variant="accent">
      <Mail className="mr-2 h-4 w-4 " /> Get in touch!
    </Button>
  );
}
