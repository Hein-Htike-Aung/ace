"use client";
import { useAuthStore } from "@/lib/authProvider";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useAuthStore();
  const router = useRouter();

  console.log({ isLoggedIn });
  useEffect(() => {
    if (!isLoggedIn) router.push("/");
  }, []);

  if (isLoggedIn)
    return (
      <div className="h-screen w-full flex flex-col dark:bg-[#18183B] overflow-x-hidden">
        Dashboard
      </div>
    );
};

export default DashboardLayout;
