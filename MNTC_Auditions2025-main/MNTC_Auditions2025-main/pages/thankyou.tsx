import type { GetServerSidePropsContext } from "next";
import middleware from "../utils/middleware";
import Layout from "../components/Layout";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await middleware(context);
}

export default function Thankyou() {
  return (
    <Layout className="flex flex-col items-center justify-center gap-6 py-20">
      <div className="text-6xl font-bold font-head text-[#F18701]">
        Thank You !!!
      </div>
      <div className="flex flex-col items-center text-xl ">
        <div>See you soon</div>
        <div>in auditions</div>
      </div>
    </Layout>
  );
}


