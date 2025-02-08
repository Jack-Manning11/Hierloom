"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h1 className="text-xl">Hierloom</h1>
      <div>
        {session ? (
          <>
            <span className="mr-4">Welcome, {session.user?.name}!</span>
            <button onClick={() => signOut()} className="bg-red-500 px-4 py-2 rounded">Logout</button>
          </>
        ) : (
          <button onClick={() => signIn("google")} className="bg-blue-500 px-4 py-2 rounded">Login</button>
        )}
      </div>
    </nav>
  );
}