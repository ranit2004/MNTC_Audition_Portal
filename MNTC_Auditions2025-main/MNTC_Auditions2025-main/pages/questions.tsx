import { useRouter } from "next/router";
import React, { useState } from "react";
import { toastError, toastSuccess } from "../utils/toast";
import axios from "axios";
import SubmitButton from "../components/SubmitButton";
import Layout from "../components/Layout";
import type { GetServerSidePropsContext } from "next";
import middleware from "../utils/middleware";
import PageBox from "@/components/PageBox";


export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await middleware(context);
}

export default function Questions() {
  const router = useRouter();

  const numberOfQuestions = Number(process.env.NEXT_PUBLIC_NUMBER_OF_QUESTION);

  // States
  const [loading, setloading] = useState(false);
  const [answers, setAnswers] = useState<string[]>(
    new Array(numberOfQuestions).fill("")
  );

  // Classnames
  const fieldClassName = "flex flex-col gap-1";
  const titleClassName = "font-bold laptop:text-md";
  const textAreaClassName =
    "outline-[#F7B801] outline-2 outline p-2 font-body placeholder:font-body hover:shadow-[6px_6px_0px_0px_#F18701] transition-shadow focus:shadow-[0px_0px_0px_4px_#F18701] placeholder:text-gray-300 rounded";

  return (
    <Layout className="px-8 laptop:py-12">
      {/* <PageBox label="2/3" className=" laptop:self-start" /> */}
      <h1 className="py-6 text-4xl font-extrabold text-center font-head">
        Answer these Questions
      </h1>

      {/* The form  */}
      <form onSubmit={submitHandler}>
        <div className="flex flex-col gap-5">
          {/* Question 1 */}
          <div className={fieldClassName}>
            <label className={titleClassName} htmlFor="0">
              Why do you want to join this club?
            </label>
            <textarea
              name="0"
              placeholder="Write atleast 100 words"
              className={textAreaClassName}
              value={answers[0]}
              onChange={changeHandler}
            />
          </div>

          {/* Question 2 */}
          <div className={fieldClassName}>
            <label className={titleClassName} htmlFor="1">
              How will you contribute to the club?
            </label>
            <textarea
              name="1"
              placeholder="Write atleast 100 words"
              className={textAreaClassName}
              value={answers[1]}
              onChange={changeHandler}
            />
          </div>

          {/* Question 3 */}
          <div className={fieldClassName}>
            <label className={titleClassName} htmlFor="2">
              Why did you choose this role?
            </label>
            <textarea
              name="2"
              placeholder="Write atleast 100 words"
              className={textAreaClassName}
              value={answers[2]}
              onChange={changeHandler}
            />
          </div>
        </div>

        <div className="flex items-center justify-center pt-8">
          <SubmitButton
            loading={loading}
            label="Next"
            className=" laptop:self-start"
          />
        </div>
      </form>
    </Layout>
  );
  function changeHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[Number(e.target.name)] = e.target.value;
      return newAnswers;
    });
  }

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setloading(true);
      await axios.put("/api/questions", { answers });
      toastSuccess("Thanks for answering the questions");
      router.replace("/rating");
    } catch (error: any) {
      toastError(error.response.data.message);
    }
    setloading(false);
  }
}

