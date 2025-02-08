"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // State for success/error messages
  const router = useRouter();

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setMessage(""); // Reset message

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage("✅ Registration successful! Redirecting...");
      setTimeout(() => {
        router.push("/login"); // Redirect after a short delay
      }, 1500);
    } else {
      setMessage(`❌ Error: ${data.error}`);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-6">Register for Hierloom</h1>
      {message && <p className="mb-4">{message}</p>} {/* Show success or error */}
      <form onSubmit={handleRegister} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="px-4 py-2 rounded text-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-2 rounded text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-2 rounded text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600">
          Register
        </button>
      </form>
    </div>
  );
}
