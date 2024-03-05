import Link from "next/link";
import { Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function MailButton() {
  return (
    <Link
      href="mailto:stoyanov.sava@gmail.com"
      className={buttonVariants({ variant: "accent" })}
    >
      <Mail className="mr-2 h-4 w-4 " /> Get in touch!
    </Link>
  );
}
