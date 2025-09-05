import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();
  return (
    <nav className="fixed z-10 w-full">
      {status === "authenticated" && (
        <div className="flex items-center justify-between px-2 py-2 mx-auto max-w-7xl">
          <div className="inline-block px-4 py-2 bg-white border border-black rounded bg-opacity-60 backdrop-blur-md">
            Maths N Tech Club
          </div>
          <div className="hidden px-4 py-2 font-medium bg-white border border-black rounded laptop:inline-block bg-opacity-60 backdrop-blur-md">
            <span className="hidden laptop:inline">{session?.user.email}</span>

            <button
              className={
                "bg-white bg-opacity-70 font-bold py-1 px-2 rounded ml-4 border border-black hover:shadow-lg transition-shadow"
              }
              onClick={() => signOut()}
            >
              Signout
            </button>
          </div>
          <button
            className={
              "bg-white font-bold py-2 px-3 rounded ml-4 border border-black hover:shadow-lg transition-shadow laptop:hidden bg-opacity-60 backdrop-blur-md"
            }
            onClick={() => signOut()}
          >
            Signout
          </button>
        </div>
      )}
    </nav>
  );
}
