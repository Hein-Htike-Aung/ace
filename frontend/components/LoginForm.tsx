"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Input,
  Button,
} from "@nextui-org/react";
import { Lock } from "lucide-react";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { useAuthStore } from "@/lib/authProvider";
import handleSubmit from "../actions/handleSubmit";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function LoginForm() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [error, setError] = React.useState(false);
  const router = useRouter();
  const { t } = useTranslation();
  const { setLoggedIn, setUser } = useAuthStore();

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <form
      action={async (formData) => {
        const data = await handleSubmit(formData);
        console.log({ data });

        if (data.success) {
          setUser(data);
          setLoggedIn(true);
          setError(false);
          router.push("/dashboard");
        } else {
          setError(true);
        }
      }}
    >
      <Card className="max-w-[500px] sm:min-w-[350px] p-2">
        <CardHeader className="flex items-center justify-center">
          <div className="p-2 rounded-full bg-sky-800">
            <Lock className="text-white" />
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-8 items-center justify-center my-6">
            <Input
              type="text"
              label={t("username")}
              name="username"
              size="md"
              labelPlacement={`outside`}
            />
            <Input
              type={isVisible ? "text" : "password"}
              label={t("password")}
              name="password"
              size="md"
              labelPlacement={`outside`}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
            />
          </div>
          <p className="text-red-600 text-sm">
            {error ? "**Invalid username or password." : ""}
          </p>
        </CardBody>

        <CardFooter className="flex flex-col">
          <Button
            type="submit"
            className="w-full my-4 bg-indigo-600 text-white text-lg"
            variant="shadow"
          >
            {t("sign_in")}
          </Button>
          <div className="flex gap-2 items-center justify-center p-2">
            <p className="text-sm text-slate-400">
              Don&apos;t have an account?
            </p>
            <Link href="/register" className="font-bold hover:underline">
              {t("sign_up")}
            </Link>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
}
