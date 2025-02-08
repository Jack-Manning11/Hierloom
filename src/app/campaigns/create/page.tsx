"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateCampaignPage() {
  const [name, setName] = useState("");
  const router = useRouter();

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/campaigns/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    if (res.ok) {
      router.push("/campaigns");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-6">Create a Campaign</h1>
      <form onSubmit={handleCreate} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Campaign Name"
          className="px-4 py-2 rounded text-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600">
          Create Campaign
        </button>
      </form>
    </div>
  );
}
