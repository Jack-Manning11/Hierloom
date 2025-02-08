"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/login"); // Redirect to login if not logged in
    return <p>Redirecting...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-6">Welcome, {session.user?.name}!</h1>
      <p className="mb-4">You are now logged in.</p>
      <button
        className="bg-red-500 px-4 py-2 rounded-md"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </div>
  );
}
