import type { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import redirect from "./redirect";

export default async function middleware(context: GetServerSidePropsContext) {
  const { req, res } = context;
  const session = await getServerSession(req, res, authOptions);
  const { url } = req;

  // if the user is unauthenticated then redirecting to "register"
  if (!session) return redirect("/", url!);

  // from here the user is authenticated
  const { user } = session;
  const { role1, answers, creativity } = user;

  // if the user is admin then he can access any page
  if (role1 === "admin") return { props: {} };

  // if the user has no role assinged then he must not have registered
  if (!role1) return redirect("/registration", url!);
  // if the user has submitted without answering all the questions, then let him at questions only
  if (answers.length < Number(process.env["NEXT_PUBLIC_NUMBER_OF_QUESTION"]!))
    return redirect("/questions", url!);

  // if it has no creativity field, then let him set the rating
  if (!creativity) return redirect("/rating", url!);

  // everything is completed so dont let him re-register
  return redirect("/thankyou", url!);
}
