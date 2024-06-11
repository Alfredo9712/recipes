import Image from "next/image";

import { Button } from "@/components/ui/button";

import { signIn } from "../../auth";

export default function Home() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <Button type="submit">Sign in</Button>
    </form>
  );
}
