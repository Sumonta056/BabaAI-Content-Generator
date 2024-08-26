"use client"
import { useRouter } from "next/navigation";
import React from "react";

const Working = () => {
  const router = useRouter();
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">Feature Under Development</h2>
        <p className="mb-4">
          This feature is currently under development. Please check back later
          for updates.
        </p>
        <button
          className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600"
          onClick={() => {
            router.push("/dashboard");
          }}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Working;