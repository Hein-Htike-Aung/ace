"use server";

import { md5 } from "js-md5";

export default async function handleSubmit(formData: FormData) {
  const username = formData.get("username");
  // @ts-ignore
  const password = formData.get("password");
  let req = {
    username,
    // @ts-ignore
    password,
  };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/api/v1/users`,
      {
        method: "POST",
        body: JSON.stringify(req),
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );
    const data = await response.json();

    if (data.status) {
      return {
        success: true,
        errMessage: "",
      };
    } else {
      return {
        success: false,
        errMessage: data.register_agent.replace(/error: /g, ""),
      };
    }
  } catch (error) {
    return {
      success: false,
    };
  }
}
