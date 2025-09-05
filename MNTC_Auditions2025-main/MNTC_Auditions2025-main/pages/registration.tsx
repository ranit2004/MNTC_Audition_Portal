import { useRouter } from "next/router";
import React, { useState } from "react";
import { toastError, toastSuccess } from "../utils/toast";
import { IUser } from "../types/types";
import type { GetServerSidePropsContext } from "next";
import middleware from "../utils/middleware";
import { departmentList, genderList, roleList } from "../utils/data";
import axios from "axios";
import Spinner from "../components/Spinner";
import Layout from "../components/Layout";
import SubmitButton from "../components/SubmitButton";
import PageBox from "@/components/PageBox";


export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await middleware(context);
}

export default function Registration() {
  type IFormData = Pick<
    IUser,
    "name" | "rollNum" | "department" | "phoneNum" | "role1" | "role2" | "gender"
  >;

  const router = useRouter();

  // States
  const [loading, setloading] = useState(false);
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    rollNum: "",
    phoneNum: "",
    department: "",
    role1: "",
    role2: "",
    gender: "",
  });

  // ClassNames
  const fieldClassName = "flex flex-col gap-1";
  const titleClassName = "font-bold laptop:text-md";
  const inputClassName =
    "outline-[#F7B801] outline-2 outline p-2 font-body placeholder:font-body hover:shadow-[6px_6px_0px_0px_#F18701] transition-shadow focus:shadow-[0px_0px_0px_4px_#F18701] placeholder:text-gray-300 rounded";

  return (
    <Layout className="px-8 laptop:py-12">
      {/* <PageBox label="1/3" /> */}
      <h1 className="py-6 text-4xl font-extrabold text-center font-head">
        LET US GET TO KNOW YOU
      </h1>

      {/* The form  */}
      <form onSubmit={submitHandler}>
        <div className="flex flex-col grid-cols-2 gap-10 laptop:grid laptop:pt-15 laptop:pr-5">
          {/* Name */}
          <div className={fieldClassName}>
            <label className={titleClassName} htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className={inputClassName}
              value={formData.name}
              onChange={changeHandler}
              autoComplete="off"
            />
          </div>

          {/* Roll Number */}
          <div className={fieldClassName}>
            <label className={titleClassName} htmlFor="rollNum">
              Roll Number
            </label>
            <input
              type="text"
              name="rollNum"
              placeholder="Enter your current roll Number"
              className={inputClassName}
              value={formData.rollNum}
              onChange={changeHandler}
              autoComplete="off"
            />
          </div>

          {/* Phone number */}
          <div className={fieldClassName}>
            <label className={titleClassName} htmlFor="phoneNum">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNum"
              placeholder="Enter your mobile no"
              className={inputClassName}
              value={formData.phoneNum}
              onChange={changeHandler}
              autoComplete="off"
            />
          </div>

          {/* Department */}
          <div className={fieldClassName}>
            <label className={titleClassName} htmlFor="department">
              Department
            </label>
            <select
              name="department"
              className={inputClassName}
              value={formData.department}
              onChange={changeHandler}
            >
              <option value="" disabled hidden>
                Select your department
              </option>
              {departmentList.map((dept) => (
                <option key={dept} value={dept} className="text-black">
                  {dept}
                </option>
              ))}
            </select>
          </div>

          {/* Domain1 */}
          <div className={fieldClassName}>
            <label className={titleClassName} htmlFor="role1">
              Domain (1st Preference)
            </label>
            <select
              name="role1"
              className={inputClassName}
              value={formData.role1}
              onChange={changeHandler}
            >
              <option value="" disabled hidden>
                Select Domain
              </option>
              {roleList.map((dept) => {
                if (dept !== formData.role2 && dept !== "admin") {
                  return (
                    <option key={dept} value={dept} className="text-black">
                      {dept}
                    </option>
                  );
                }
              })}
            </select>
          </div>

          {/* Domain2 */}
          <div className={fieldClassName}>
            <div className={titleClassName}> Domain (2nd Preference)</div>
            <select
              name="role2"
              className={inputClassName}
              value={formData.role2}
              onChange={changeHandler}
            >
              <option value="" disabled hidden>
                Select Domain
              </option>
              {roleList.map((dept) => {
                if (dept !== formData.role1 && dept !== "admin") {
                  return (
                    <option key={dept} value={dept} className="text-black">
                      {dept}
                    </option>
                  );
                }
              })}
            </select>
          </div>

          {/* Gender */}
          <div className={fieldClassName}>
            <div className={titleClassName}> Select Gender</div>
            <select
              name="gender"
              className={inputClassName}
              value={formData.gender}
              onChange={changeHandler}
            >
              <option value="" disabled hidden>
                Select Gender
              </option>
              {genderList.map((gender) =>
                <option key={gender} value={gender} className="text-black">
                  {gender}
                </option>
              )}
            </select>
          </div>
        </div>



        {/* Submit Button */}
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
      await axios.put("/api/registration", formData);
      toastSuccess("Registration Successful");
      router.replace("/questions");
    } catch (error: any) {
      toastError(error.response.data.message);
    }
    setloading(false);
  }
}

