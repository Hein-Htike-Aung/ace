"use client";
import React, { useState } from "react";
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
import { KeyRound } from "lucide-react";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { EyeFilledIcon } from "./EyeFilledIcon";
import handleSubmit from "../actions/handleRegSubmit";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function RegisterForm() {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);
  const { t } = useTranslation();

  return (
    <form
      action={async (formData) => {
        const data = await handleSubmit(formData);
        console.log({ data });
        if (data.success) {
          router.push("/login");
        } else {
          setError(true);
          setErrorMessage(data.errMessage);
        }
      }}
    >
      <Card className="max-w-[500px] sm:min-w-[350px] p-2">
        <CardHeader className="flex items-center justify-center">
          <div className="p-2 rounded-full bg-sky-800 hover:bg-teal-400">
            <KeyRound className="text-white" />
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
              type={isPasswordVisible ? "text" : "password"}
              label={t("password")}
              labelPlacement={`outside`}
              size="md"
              name="password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
            />
          </div>
          <p className="text-red-600 text-sm">{error ? errorMessage : ""}</p>
        </CardBody>

        <CardFooter className="flex flex-col">
          <Button
            type="submit"
            className="w-full my-4 bg-indigo-600 text-white text-lg"
            variant="shadow"
          >
            {t("sign_up")}
          </Button>
          <div className="flex gap-2 items-center justify-center p-2">
            <p className="text-sm text-slate-400">Have an account?</p>
            <Link href="/login" className="font-bold hover:underline">
              {t("sign_in")}
            </Link>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
}
