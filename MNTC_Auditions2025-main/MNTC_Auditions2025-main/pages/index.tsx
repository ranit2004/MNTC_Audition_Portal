import { signIn } from "next-auth/react";
import type { GetServerSidePropsContext } from "next";
import middleware from "../utils/middleware";
import Image from "next/image";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await middleware(context);
}

export default function Index() {
  return (
    <div className="min-h-screen flex laptop:flex-row flex-col bg-[url('/pattern.svg')] bg-fixed bg-left bg-no-repeat laptop:bg-none justify-center">
      {/* Hero */}
      <div className='flex flex-col gap-12 px-2 py-16 text-center bg-white bg-opacity-75 laptop:px-16 laptop:flex-1 laptop:justify-center laptop:text-left backdrop-blur-lg laptop:backdrop-blur-none'>
        {/* Title */}
        <h1 className='text-6xl text-white laptop:text-7xl font-head'>
          <span className='text-[#3D348B] pb-4 font-black block'>MATHS N</span>
          <span className='block  text-[#3D348B] pb-4 font-black'>
            TECH CLUB
          </span>
          <span className='block text-3xl font-bold text-black laptop:pl-2 laptop:text-5xl font-body'>
            Auditions &apos; 25
          </span>
        </h1>

        {/* Register Btn */}
        <button
          onClick={(e) => {
            e.preventDefault();
            signIn("google", { callbackUrl: "/" });
          }}
          className='px-16 py-3 bg-[#F7B801] inline-block laptop:self-start font-bold text-lg border-black border laptop:ml-2 hover:shadow-[8px_8px_0px_0px_#F18701] transition-shadow'
        >
          Register
        </button>
      </div>
      {/* Background Pattern */}
      <div className='static bottom-0 flex-1 hidden w-full h-32 laptop:block'>
        <img src='/pattern.svg' />
      </div>
    </div>
  );
}
