"use client";

import { useAuthStore } from "@/lib/authProvider";
import { Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { setUser, setLoggedIn } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setLoggedIn(true);

      // @ts-ignore
      setAgent(JSON.parse(localStorage.getItem("agent")));
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  }, []);
  return (
    <main className="light flex min-h-screen h-screen flex-col items-center justify-between p-24">
      <div className="h-full w-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    </main>
  );
}
