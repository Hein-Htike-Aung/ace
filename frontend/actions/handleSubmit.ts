"use server";
import { md5 } from "js-md5";
export default async function handleSubmit(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/api/v1/login`,
      {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        cache: "no-store",
      }
    );
    const data = await response.json();
    if (data.status) {
      return {
        id: data.id,
        username: data.username,
        success: true,
      };
    } else {
      return {
        aid: null,
        success: false,
      };
    }
  } catch (error) {
    return {
      aid: null,
      success: false,
    };
  }
}
