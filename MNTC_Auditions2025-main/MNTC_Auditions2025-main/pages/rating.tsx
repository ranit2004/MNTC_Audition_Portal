import type { GetServerSidePropsContext } from "next";
import middleware from "../utils/middleware";
import React, { useState } from "react";
import { toastError, toastSuccess } from "../utils/toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import Layout from "../components/Layout";
import SubmitButton from "../components/SubmitButton";
import { IUser } from "../types/types";
import RangeSlider from "../components/RangeSlider";
import PageBox from "@/components/PageBox";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await middleware(context);
}

export default function Rating() {
  type IFormData = Pick<
    IUser,
    "creativity" | "dedication" | "punctuality" | "hardworking"
  >;
  const [formData, setFormData] = useState<IFormData>({
    creativity: "1",
    hardworking: "1",
    punctuality: "1",
    dedication: "1",
  });
  const [loading, setloading] = useState(false);
  const router = useRouter();

  return (
    <Layout className="px-8 laptop:py-12">
      {/* <PageBox label="3/3" className=" laptop:self-start" /> */}
      <h1 className="py-6 text-4xl font-extrabold text-center font-head">
        Rate Yourself
      </h1>

      <form onSubmit={submitHandler}>
        <div className="flex flex-col grid-cols-2 gap-10 mt-10 laptop:grid laptop:gap-16">
          {/* Creativity */}
          <RangeSlider
            changeHandler={changeHandler}
            name="creativity"
            value={formData.creativity!}
          />
          {/* Creativity */}
          <RangeSlider
            changeHandler={changeHandler}
            name="hardworking"
            value={formData.hardworking!}
          />
          {/* punctuality */}
          <RangeSlider
            changeHandler={changeHandler}
            name="punctuality"
            value={formData.punctuality!}
          />
          {/* dedication */}
          <RangeSlider
            changeHandler={changeHandler}
            name="dedication"
            value={formData.dedication!}
          />
        </div>
        <div className="flex items-center justify-center pt-8">
          <SubmitButton loading={loading} label="Next" />
        </div>
      </form>
    </Layout>
  );

  function changeHandler(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setloading(true);
      await axios.put("/api/rating", formData);
      toastSuccess("Rating submitted");
      router.replace("/thankyou");
    } catch (error: any) {
      toastError(error.response.data.message);
    }
    setloading(false);
  }
}
